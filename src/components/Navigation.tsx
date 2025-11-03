import { useState, useEffect, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getPostBySlug, getAllPosts } from "@/blog/utils/content";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation(["common"]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isOnBlogPage = () => {
    return location.pathname.includes("/blog");
  };

  const getCurrentLanguage = (): "en" | "es" | "pt" => {
    const currentPath = location.pathname;
    const langMatch = currentPath.match(/^\/(en|es|pt)/);
    return langMatch ? (langMatch[1] as "en" | "es" | "pt") : "pt";
  };

  const handleNavClick = (item: (typeof navItems)[number]) => {
    setIsMobileMenuOpen(false);
    const currentLang = getCurrentLanguage();

    startTransition(() => {
      if (item.type === "route") {
        // Navigate to blog
        navigate(`/${currentLang}/blog`);
      } else {
        // Scroll to section on landing page
        if (isOnBlogPage()) {
          // If on blog, navigate to home first, then scroll
          navigate(`/${currentLang}`, { state: { scrollTo: item.id } });
          // The scroll will be handled by the Index page after navigation
        } else {
          // Already on landing page, just scroll
          scrollToSection(item.id);
        }
      }
    });
  };

  const changeLanguage = (lng: string) => {
    const currentPath = location.pathname;

    // Extract current language from URL path
    const currentLangMatch = currentPath.match(/^\/(en|es|pt)/);
    const currentLang = currentLangMatch
      ? (currentLangMatch[1] as "en" | "es" | "pt")
      : "pt";

    // Get path without the language prefix
    const pathWithoutLang = currentPath.replace(/^\/(en|es|pt)/, "");

    // Check if we're on a blog post page
    const blogPostMatch = pathWithoutLang.match(/^\/blog\/(.+)$/);

    if (blogPostMatch) {
      const currentSlug = blogPostMatch[1];

      // Try to find the current post
      const currentPost = getPostBySlug(currentLang, currentSlug);

      if (currentPost && currentPost.translations) {
        // Check if there's a translation for the target language
        const targetSlug =
          currentPost.translations[
            lng as keyof typeof currentPost.translations
          ];

        if (targetSlug) {
          // Navigate to the translated post
          const newPath = `/${lng}/blog/${targetSlug}`;
          startTransition(() => {
            navigate(newPath);
          });
          return;
        }
      }

      // If no translation found, fallback to blog index
      startTransition(() => {
        navigate(`/${lng}/blog`);
      });
      return;
    }

    // Navigate to the same path with new language (for non-blog pages)
    const newPath = `/${lng}${pathWithoutLang || ""}`;
    startTransition(() => {
      navigate(newPath);
    });
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const navItems = [
    { key: "about", id: "about", type: "scroll" as const },
    { key: "services", id: "services", type: "scroll" as const },
    { key: "projects", id: "projects", type: "scroll" as const },
    { key: "contact", id: "contact", type: "scroll" as const },
    { key: "blog", id: "blog", type: "route" as const },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() =>
              handleNavClick({ key: "hero", id: "hero", type: "scroll" })
            }
            className="text-1xl font-bold hover:opacity-80 transition-opacity"
            aria-label={t("accessibility.goToHome")}
          >
            <span className="text-foreground">{t("brand.name")}</span>
            <span className="text-gradient-primary">{t("brand.surname")}</span>
            <span className="text-secondary">{t("brand.domain")}</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item)}
                className="lg:text-lg text-foreground hover:text-primary transition-colors hover-underline"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">
                    {t("accessibility.toggleLanguage")}
                  </span>
                  <Globe
                    className="h-5 w-5"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? "bg-primary" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            {/* Keep this disabled until the light theme is ready */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button> */}

            {/* CTA Button */}
            <Button
              onClick={() =>
                handleNavClick({
                  key: "contact",
                  id: "contact",
                  type: "scroll" as const,
                })
              }
              className="bg-[hsl(var(--primary-cta))] text-[hsl(var(--on-primary-cta))] hover:bg-[hsl(var(--primary-cta-hover))] active:bg-[hsl(var(--primary-cta-active))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.4)] shadow-glow"
            >
              {t("nav.cta")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMobileMenuOpen ? (
              <X
                size={26}
                aria-hidden="true"
                role="presentation"
                focusable="false"
              />
            ) : (
              <Menu
                size={26}
                aria-hidden="true"
                role="presentation"
                focusable="false"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 h-screen w-screen z-50 bg-background/95 md:hidden flex flex-col px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() =>
                  handleNavClick({ key: "hero", id: "hero", type: "scroll" })
                }
                className="text-1xl font-bold hover:opacity-80 transition-opacity"
                aria-label={t("accessibility.goToHome")}
              >
                <span className="text-foreground">{t("brand.name")}</span>
                <span className="text-gradient-primary">
                  {t("brand.surname")}
                </span>
                <span className="text-secondary">{t("brand.domain")}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground"
                aria-label={t("accessibility.closeMenu")}
              >
                <span className="sr-only">{t("accessibility.closeMenu")}</span>
                <X
                  size={26}
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                />
              </button>
            </div>
            <div className="flex flex-col space-y-4 mb-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground text-2xl font-medium hover:text-primary transition-colors text-left"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4 mb-8">
              {/* Mobile Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <span className="sr-only">
                      {t("accessibility.toggleLanguage")}
                    </span>
                    <Globe
                      className="h-4 w-4 mr-2"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    />
                    {languages.find((l) => l.code === i18n.language)?.flag}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={
                        i18n.language === lang.code ? "bg-primary" : ""
                      }
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Mobile Theme Toggle */}
              {/* Keep this disabled until the light theme is ready */}
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button> */}
            </div>
            <Button
              onClick={() =>
                handleNavClick({
                  key: "contact",
                  id: "contact",
                  type: "scroll" as const,
                })
              }
              className="bg-[hsl(var(--primary-cta))] text-[hsl(var(--on-primary-cta))] hover:bg-[hsl(var(--primary-cta-hover))] active:bg-[hsl(var(--primary-cta-active))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.4)] text-lg py-4"
            >
              {t("nav.cta")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
