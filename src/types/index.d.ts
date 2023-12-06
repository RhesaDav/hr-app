// Navigation

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type DashboardConfig = {
  mainNav: MainNavItem[];
  mainNavKaryawan: MainNavItem[];
  sidebarNavKaryawan: SidebarNavItem[];
  sidebarNavAtasan: SidebarNavItem[];
  sidebarNavAdmin: SidebarNavItem[];
  siebarNavVerifikator: SidebarNavItem[];
  sidebarNavAtasan: SidebarNavItem[];
  siebarNavVerifikatorAsUser: SidebarNavItem[];
  sidebarNavKepala: SidebarNavItem[];
  sidebarNavKepalaAsUser: SidebarNavItem[];
};

// Metadata
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

// Uploadthing
export type ExpandedRouteConfig = Partial<Record<AllowedFileType, RouteConfig>>;
