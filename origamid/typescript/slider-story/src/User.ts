export class User {
  private id: number;
  private name: string;
  private stories: string[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getUser() {
    return { id: this.id, name: this.name, stories: this.stories };
  }

  getStories() {
    return this.stories;
  }

  addStory(story: string) {
    this.stories.push(story);
  }
}
