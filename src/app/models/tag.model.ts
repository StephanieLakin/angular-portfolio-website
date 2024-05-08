

export class Tag {
  static readonly ANGULAR = new Tag('Angular', '#a6120d', 'Framework');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#235a97', 'Language');
  static readonly REACT = new Tag('ReactJs', '#61dbfb', 'Framework');
  static readonly CSHARP = new Tag('C#', '#684d95', 'Language');
  static readonly ASPNET = new Tag('Asp.Net', '#1871bb', 'Framework');
  static readonly DOTNETCORE = new Tag('.Net CORE Web Api', '#672876', 'Framework');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#f7df1e', 'Language');
  static readonly NODEJS = new Tag('Node Js', '#6ea101', 'Framework');

  selected: boolean = false;
  name: string;
  category: string;

  private constructor(name: string, public readonly color: string, category: string) {
    this.name = name;
    this.category = category;
  }

  toString() {
    return this.name;
  }
}