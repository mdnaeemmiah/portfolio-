export interface Blog {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
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