import { ReactNode, MouseEventHandler } from "react";

export interface WrapperGridProps {
  children: ReactNode;
  imgLeft?: boolean;
}

export interface TitleColors {
  text: string;
  colorText: string;
  withBr?: boolean;
}

export interface SectionProps {
  children: ReactNode;
  idSection?: string;
  withoutMT?: boolean;
  withoutMB?: boolean;
}

export interface SectionType {
  id: string;
  name: string;
}

export interface HeaderSectionsProps {
  scrollToSection: (id: string) => void;
}

export interface LogoProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export interface ButtonColorsProps {
  text: string;
  link?: string;
  scrollToSection?: (id: string) => void;
  sectionTo?: string;
  isExtraService?: boolean;
  cardInfo?: {
    title: string;
    capacity: string;
    include: string;
  };
  salonCategory?: string;
}

export interface TitleDescriptionProps {
  title: string;
  titleColor: string;
  paragraph?: string;
}

export interface ReserveCardProps {
  image: string;
  altImage: string;
  title: string;
  capacity: string;
  include: string;
  salonCategory: string;
}

export interface ReserveCardType {
  image: string;
  altImage: string;
  title: string;
  capacity: string;
  include: string;
}

export interface InfoCardsProps {
  infoCards: ReserveCardType[];
  salonCategory: string;
}

export interface WrapperExtraProps {
  children: ReactNode;
}

export interface ExtraCardProps {
  text: string;
  srcIcon: string;
  altImg: string;
  className?: string;
}
