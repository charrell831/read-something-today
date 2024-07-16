type AuthorNode = {
    statement: string;
    link: string;
}

const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";


export const useAuthorStore = () => {
     async function chooseAuthor() {
        try {
            const response = await fetch(`${url}/api/baldwinTree`);
            const author = await response.json();
            return author;
        } catch (error) {
            console.error("Error fetching author:", error);
        }
    }
}