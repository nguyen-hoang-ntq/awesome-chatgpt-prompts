# NTQ Internal Deployment Customization

## 📋 Changes Made

This document outlines the customizations made to create NTQ's internal AI Prompts platform while respecting the original author.

### 1. Branding Configuration (`prompts.config.ts`)

#### Changed:
```typescript
const useCloneBranding = true;  // Was: false

branding: {
  name: "NTQ AI Prompts",              // Was: "prompts.chat"
  logo: "/ntq-logo.png",               // Was: "/logo.svg"
  logoDark: "/ntq-logo.png",           // Was: "/logo-dark.svg"
  favicon: "/ntq-logo.png",            // Was: "/logo.svg"
  description: "Internal AI Prompts Library for NTQ Team",  // Custom
}
```

#### Auth Providers:
```typescript
providers: ["google"],  // Only Google OAuth for NTQ
```

### 2. What Gets Hidden with Clone Branding

When `useCloneBranding = true`, the following elements are automatically hidden:

✅ **Homepage:**
- ❌ "Deploy Your Private Server" button (line 141-148 in `src/app/page.tsx`)
- ❌ "Be the X stargazer on GitHub" link (line 158-168)
- ❌ Achievements section (Forbes, Harvard, HuggingFace, GitHub stats) (line 174-244)
- ❌ Sponsors section (Clemta, Wiro.ai, Cognition, Warp) (line 247-295)

✅ **Header:**
- ❌ Context menu with "Copy Logo SVG" and "Brand Assets" (uses simpler logo display)

✅ **Footer:**
- ❌ DeepWiki link
- ❌ "How To", "Docs", "API", "Privacy", "Terms", "Support" links
- ✅ GitHub link remains (respecting open source)
- ✅ Added credit: "Based on prompts.chat" with link

✅ **Other:**
- ❌ App banner for Apple devices (line 66 in `src/components/layout/app-banner.tsx`)

### 3. Footer Attribution (`src/components/layout/footer.tsx`)

Added proper attribution to respect the original author:

```
© 2025 NTQ AI Prompts • Based on prompts.chat
```

- NTQ logo displayed
- CC0 license preserved
- Link to original prompts.chat maintained
- GitHub link to source repository kept

### 4. Visual Identity

#### Logo:
- File: `public/ntq-logo.png`
- Blue "N" logo representing NTQ
- Used in header, footer, and as favicon

#### Branding:
- Clean, professional appearance
- Maintains NTQ identity
- Clear indication this is internal deployment

## 🎯 What This Achieves

### For NTQ:
✅ **Professional Internal Tool**
- Branded with NTQ logo and name
- No third-party branding or sponsorships
- Clean interface for team use
- Google authentication integrated

### Respecting Original Author:
✅ **Proper Attribution**
- Footer credit to prompts.chat
- GitHub link to source repository
- CC0 license preserved
- No modifications to license or credits in code

### Compliance:
✅ **License Compliance**
- CC0 1.0 Universal allows this usage
- Attribution provided (though not required by CC0)
- Open source spirit maintained

## 🚀 Deployment

This configuration is ready for Vercel deployment with:
- Domain: `https://awesome-prompts.vercel.app`
- Google OAuth configured
- Neon PostgreSQL database connected
- Environment variables set

## 📝 Future Customization

To further customize:

1. **Theme Colors** (`prompts.config.ts`):
   ```typescript
   theme: {
     colors: {
       primary: "#0066CC",  // NTQ brand color
     }
   }
   ```

2. **Add NTQ-specific Categories**:
   - Create internal prompt categories
   - Organize by department/use case

3. **Custom Features**:
   - All features currently enabled
   - Can disable based on needs

## ⚠️ Important Notes

- This is a **private deployment** for internal NTQ use
- Do not remove GitHub link or license information
- Keep attribution in footer
- Update regularly from upstream for security patches

## 📚 Related Documentation

- [VERCEL-DEPLOY.md](VERCEL-DEPLOY.md) - Deployment guide
- [DEPLOY-CHECKLIST.md](DEPLOY-CHECKLIST.md) - Quick deployment checklist
- [VERCEL-ENV-SETUP-GUIDE.md](VERCEL-ENV-SETUP-GUIDE.md) - Environment setup

---

**Built with respect for open source. Based on [prompts.chat](https://prompts.chat) by [@f](https://github.com/f)**

