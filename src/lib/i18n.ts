export interface LanguageInfo {
  name: string;
  path: string;
}

export type LanguageCode = 'en_us' | 'zh_cn';

export const languages: Record<LanguageCode, LanguageInfo> = {
  en_us: { name: "English", path: "/en_us" },
  zh_cn: { name: "简体中文", path: "/zh_cn" },
};

export function getPath(url: URL) {
  const base = "/ansurfen";
  const target = (Object.keys(languages) as LanguageCode[]).find(key =>
    url.pathname.startsWith(`${base}${languages[key].path}`)
  ) || "en_us";
  return target !== "en_us" ? `${base}/${target}` : base;
}