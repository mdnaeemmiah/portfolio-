export interface Blog {
    author: string;
    likes: number;
    _id: string;  // Change `id` to `_id`
    title: string;
    content: string;
    image: string;
    category: string;
  } 

  export interface Project {
    _id:string;
    title: string;        // The title of the project
    description: string;  // A brief description of the project
    image: string;        // URL of the project's image or screenshot
    liveLink: string;     // A link to the live or deployed project
  }