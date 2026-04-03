/**
 * Model for the contact form submission payload.
 * Ready to be sent to a future REST API.
 */
export interface ContactRequest {
  email: string;
}

/**
 * Response from the contact/proposal API.
 */
export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Service card data model used in ServiciosComponent.
 */
export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  colorClass: string;
  iconColorClass: string;
  checkColorClass: string;
}

/**
 * Project card data model used in ProyectosComponent.
 */
export interface ProjectCard {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  liveUrl: string;
  tags: ProjectTag[];
  features: ProjectFeature[];
}

export interface ProjectTag {
  label: string;
  icon: string;
  colorClass: string;
}

export interface ProjectFeature {
  label: string;
  icon: string;
  iconColor: string;
}

/**
 * Process step model used in ProcesoComponent.
 */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  glowColor: string;
}

/**
 * Technology item model used in TecnologiasComponent.
 */
export interface TechItem {
  name: string;
  icon: string;
  hoverColor: string;
}
