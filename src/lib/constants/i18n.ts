type pair = { key: string, value: string }

export interface ProfileText {
    twitter: pair
    linkedin: pair
    github: pair
    discord: pair
    contact: pair
    resume: pair
}

const zhCN = {
    twitter: {
        key: "关注我的",
        value: "Twitter"
    },
    linkedin: {
        key: "联系我",
        value: "LinkedIn"
    },
    github: {
        key: "查看我的代码",
        value: "GitHub"
    },
    discord: {
        key: "加入我的",
        value: "Discord"
    },
    contact: {
        key: "我在寻找新的机会",
        value: "联系我"
    },
    resume: {
        key: "查看我的",
        value: "简历"
    }
} satisfies ProfileText;

const enUS = {
    twitter: {
        key: "Follow me on",
        value: "Twitter"
    },
    linkedin: {
        key: "Let's connect on",
        value: "LinkedIn"
    },
    github: {
        key: "Check out my repos on",
        value: "GitHub"
    },
    discord: {
        key: "Join me on",
        value: "Discord"
    },
    contact: {
        key: "I'm open to new opportunities",
        value: "get in touch"
    },
    resume: {
        key: "Take a look at my",
        value: "Resume"
    }
} satisfies ProfileText;

export const PROFILE_TEXT = {
    zhCN,
    enUS,
};

export interface ExperienceText {
    name: string
    showMore: string
    showLess: string
}

export const EXPERIENCE_TEXT = {
    zhCN: {
        name: "经历",
        showMore: "展开",
        showLess: "收起"
    } satisfies ExperienceText,
    enUS: {
        name: "Experience",
        showMore: "Show more",
        showLess: "Show less"
    } satisfies ExperienceText,
};

type Link = { label: string, href: string }


export type NavText = Link[];

export const NAV_TEXT = {
    zhCN: [
          { label: "首页", href: "/" },
          { label: "文章", href: "/articles" },
          { label: "项目", href: "/projects" }
     ] satisfies NavText,
    enUS: [
        { label: "Home", href: "/" },
        { label: "Articles", href: "/articles" },
        { label: "Projects", href: "/projects" }
    ] satisfies NavText,
};

