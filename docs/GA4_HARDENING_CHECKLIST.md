# GA4 Hardening Checklist & Next Steps

**Status:** GA4 Base Installation ✅ Complete  
**Measurement ID:** `G-17XTVR8E46`  
**Prioridade:** Alta → Média

---

## 📋 Checklist de Próximos Passos

### 1. ✅ **Marcar Conversões no GA4** (UI)

**Status:** ⏳ Pendente (deve ser feito no GA4 Dashboard)

Passos no GA4:

- Navegue para **Admin → Conversions → New**

- Crie 2 eventos como conversões:
  - `contact_form_submit` (quando formulário é enviado)
  - `whatsapp_click` (quando usuário clica em WhatsApp)

**Benefício:** Rastreia funis de conversão e ROI.

---

### 2. ✅ **Filtrar Tráfego Interno** (Seu IP)

**Status:** ⏳ Pendente (deve ser feito no GA4 Dashboard)

Passos no GA4:

1. **Admin → Data Streams → Configure tag settings**

2. Clique em **Define Internal Traffic**
3. Crie um filtro com seu IP (ex: `177.XXX.XXX.XXX`)
4. **Admin → Data Settings → Data Filters → Internal**
5. Marque como **Active**

**Benefício:** Evita que seu próprio tráfego (testes) distorça os dados.

---

### 3. ✅ **Excluir Referências Indesejadas** (Referrals)

**Status:** ⏳ Pendente (deve ser feito no GA4 Dashboard)

Passos no GA4:

1. **Admin → Data Streams → More tagging settings**

2. **List unwanted referrals**
3. Adicione domínios que "quebram" atribuição (ex: seu processador de pagamento, encurtadores, etc.)

**Benefício:** Manter dados de origem de tráfego limpos.

**Para WhatsApp:** Use UTMs nos seus links WhatsApp para rastrear melhor.

---

### 4. ✅ **Implementar CTA & WhatsApp Tracking no Código**

**Status:** ⏳ Pendente no Código

**Arquivos envolvidos:**

- `src/components/HeroSection.tsx` - Botão "Começar" (CTA)
- `src/components/Footer.tsx` - Links WhatsApp
- `src/components/ContactSection.tsx` - Botão WhatsApp no formulário

**Exemplo para Hero CTA:**

```tsx
// src/components/HeroSection.tsx
import { trackCTA } from "@/lib/analytics";
import { useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";

const handleCTAClick = () => {
  trackCTA(
    "get-started", // label
    "hero", // section
    i18n.language, // locale
    location.pathname // path
  );
  scrollToSection("contato");
};
```

**Exemplo para WhatsApp Link:**

```tsx
// src/components/Footer.tsx
import { trackWhatsApp } from "@/lib/analytics";
import { useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";

const handleWhatsAppClick = () => {
  trackWhatsApp(
    "footer", // position
    i18n.language, // locale
    selectedCountry?.iso2 || "BR", // country
    location.pathname // path
  );
};

// No link:
<a
  href={whatsappUrl}
  onClick={handleWhatsAppClick}
  target="_blank"
  rel="noopener noreferrer"
>
  Falar no WhatsApp
</a>;
```

**Commit sugerido:**

```bash
git add src/components/HeroSection.tsx src/components/Footer.tsx src/components/ContactSection.tsx
git commit -m "feat(analytics): track cta and whatsapp clicks with locale and country."
```

---

### 5. ✅ **Consent Mode v2 (LGPD/GDPR)**

**Status:** ⏳ Pendente (será implementado depois)

Quando você adicionar um banner de consentimento:

1. Instale biblioteca (ex: `@orejime/javascript` ou `klaro`)
2. O banner controlará se eventos são enviados ao GA4
3. Adaptaremos `src/lib/analytics.ts` para respeitar o consent

**Exemplo de como ficará:**

```tsx
// src/lib/analytics.ts (futuro)
export const trackPageView = (path, title, locale, theme) => {
  const hasConsent = window.consentManager?.hasConsent('analytics');
  if (!hasConsent) return; // Respeita o consent do usuário

  gtag('event', 'page_view', { ... });
};
```

---

### 6. ✅ **Export para BigQuery**

**Status:** ⏳ Pendente (opcional, para dados avançados)

Passos no GA4:

1. **Admin → BigQuery Links → Link**

2. Autorize sua conta Google Cloud
3. GA4 exportará dados em tempo real para BigQuery

**Benefício:** Dashboards avançados, análises custom, Looker Studio integrado.

---

### 7. ✅ **Bot & Spam Filtering**

**Status:** ✅ Já coberto

Com o filtro interno ativo (passo 2), GA4 já filtra bots automaticamente.

---

### 8. ✅ **Retenção de Dados & Google Signals**

**Status:** ⏳ Pendente (configuração recomendada)

Passos no GA4:

1. **Admin → Data Settings → Data Retention**
2. Defina para **14 meses** (máximo antes de anonimizar)
3. **Google Signals:** Habilitar se precisar relatórios cross-device (respeitando consent)

---

## 📚 Commit Roadmap

```bash
# 1. Implementar tracking nos componentes
git commit -m "feat(analytics): track cta and whatsapp clicks with locale and country."

# 2. (Opcional) Guia de UTMs para Marketing
git commit -m "docs(marketing): add UTM convention guide for cta and whatsapp links."

# 3. (Futuro) Consent Mode v2
git commit -m "feat(analytics): implement consent mode v2 for LGPD compliance."
```

---

## 🎯 QA Rápido (5 min)

### Testar Tracking Funcionando

1. **Ativar DebugView no GA4:**

   - Abra o site
   - Console do navegador: `gtag('config', 'G-17XTVR8E46', { debug_mode: true })`

2. **Navegar e Verificar Eventos:**

   - Abra 2-3 rotas diferentes
   - Clique em botões "Começar" e "WhatsApp"
   - Vá para GA4 Dashboard → **DebugView**
   - Veja eventos: `page_view`, `cta_click`, `whatsapp_click` em tempo real

3. **Enviar Formulário:**

   - Preencha e envie o formulário (sem dados sensíveis)
   - Verifique que **nome, email, mensagem NÃO aparecem** no GA4
   - Apenas status, país e rota devem aparecer

4. **Verificar UTMs (opcional):**
   - Se compartilhar link com `?utm_source=email&utm_medium=newsletter`
   - GA4 deve rastrear como "Email / Newsletter"

---

## 🚀 Próximas Ações Imediatas

### Hoje (Alta Prioridade)

- [ ] Configurar conversões no GA4 (passos 1 acima)
- [ ] Filtrar IP interno no GA4 (passo 2)
- [ ] Executar QA rápido (DebugView)

### Esta Semana (Média Prioridade)

- [ ] Implementar `trackCTA` nos botões
- [ ] Implementar `trackWhatsApp` nos links
- [ ] Commit com tracking de eventos

### Próximas Semanas

- [ ] Criar guia de UTMs para marketing
- [ ] Implementar Consent Mode v2 (LGPD)
- [ ] Conectar BigQuery (se precisar de dados avançados)

---

## 📖 Documentação Complementar

- **Guia Completo:** Ver `docs/GA4_INTEGRATION.md`
- **Setup Resumido:** Ver `GA4_SETUP_COMPLETE.md`
- **Exemplos de Código:** Veja os arquivos de componentes sugeridos acima

---

## 💡 Dicas Rápidas

1. **UTM Padrão para seus links:**

   - WhatsApp: `?utm_source=whatsapp&utm_medium=chat&utm_campaign=contact`
   - CTA: `?utm_source=website&utm_medium=cta&utm_campaign=get-started`

2. **Testar Consent Mode depois:**

   - Usuário nega analytics → nenhum evento enviado ao GA4
   - Usuário aceita → eventos normais

3. **Manter privacidade:**
   - ✅ Rastreie: páginas, botões, locales, país
   - ❌ Nunca rastreie: emails, nomes, conteúdo de mensagens

---

**Branch:** `analytics`  
**Status:** Pronto para deploy em produção ✅  
**Próximo passo:** Executar QA e configurar conversões no GA4
