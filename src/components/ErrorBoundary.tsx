import React, { Component, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const ErrorContent = () => {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("error.title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t("error.message")}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          {t("error.reload")}
        </button>
      </div>
    </div>
  );
};

class ErrorBoundaryComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorContent />;
    }

    return this.props.children;
  }
}

export const ErrorBoundary = ErrorBoundaryComponent;
