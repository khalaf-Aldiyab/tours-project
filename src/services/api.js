export const fetchToursData = async () => {
    const response = await fetch("https://www.course-api.com/react-tours-project");
    if (!response.ok) {
      throw new Error("Failed to fetch tours data");
    }
    return response.json();
  };
  