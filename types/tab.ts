interface Tab {
  id: string;
  label: string;
}

interface Preference {
  id: string;
  title: string;
  hint: string;
}

interface Counterinfo {
  id: string;
  title: string;
  desc: string;
  onlyOne: boolean;
  defaultNumber: number;
}