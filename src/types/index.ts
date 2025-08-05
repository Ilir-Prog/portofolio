export interface Language {
  code: 'en' | 'sq';
  name: string;
  flag: string;
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    certifications: string;
    projects: string;
    skills: string;
    contact: string;
  };
  about: {
    title: string;
    description: string[];
    coreSkills: {
      title: string;
      skills: string[];
    };
  };
  experience: {
    title: string;
    positions: {
      title: string;
      company: string;
      period: string;
      description: string[];
    }[];
  };
  education: {
    title: string;
    items: {
      title: string;
      institution: string;
      year: string;
      description?: string;
    }[];
  };
  certifications: {
    title: string;
    items: {
      title: string;
      issuer: string;
      year: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    items: {
      title: string;
      description: string;
      year: string;
      details: string[];
    }[];
  };
  skills: {
    title: string;
    technical: {
      title: string;
      skills: string[];
    };
    soft: {
      title: string;
      skills: string[];
    };
    languages: {
      title: string;
      skills: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    info: {
      email: string;
      phone: string;
    };
    contactInfo: {
      title: string;
      email: string;
      phone: string;
    };
    weatherWidget: {
      title: string;
      partlyCloudy: string;
      visibility: string;
      wind: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export type Theme = 'light' | 'dark';