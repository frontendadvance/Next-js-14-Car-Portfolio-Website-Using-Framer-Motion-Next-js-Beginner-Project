type WrapperProps = {
    children: React.ReactNode
    className? : string
  }

  type NavLink = {
    path: string;
    label: string;
  };

  type CountUpProps = {
    start: number
    end: number
    duration: number
  };

  type countUpItemsProps = {
    id: number;
    number: number;
    text: string;
  };

  type ProjectProps = {
    id: number;
    img: string;
    name: string;
    des: string;
    detail: string[];
  }

  type ServiceProps = {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
  }

  type Skills = {
    name: string;
    level: number;
  };

  type SkillBarProps = {
    skills: Skills[];
  };

  type GalleryProps = {
    id: number;
    name: string;
    des: string;
  };

  type ContactsProps = {
    id: number;
    title: string;
    text: string;
  };

export {
    WrapperProps,
    NavLink,
    CountUpProps,
    countUpItemsProps,
    ProjectProps,
    ServiceProps,
    SkillBarProps,
    ContactsProps
};