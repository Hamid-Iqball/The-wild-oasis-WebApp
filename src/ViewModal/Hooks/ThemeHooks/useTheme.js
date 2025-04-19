import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTheme, setTheme } from "../../../Modal/Services/themeService,";  // Corrected import

const useTheme = () => {
    const queryClient = useQueryClient();

    // Fetch stored theme
    const { data: theme = "light" } = useQuery({
        queryKey: ["theme"],
        queryFn: getTheme,
        staleTime: Infinity,
    });

    // Mutation to toggle theme
    const { mutate: toggleTheme } = useMutation({
        mutationFn: () => {
            const newTheme = theme === "dark" ? "light" : "dark"; // Toggle theme
            setTheme(newTheme); // Set the new theme
            return newTheme;
        },
        onSuccess: (newTheme) => {
            queryClient.setQueryData(["theme"], newTheme); // Update cache

            // Apply class to <html> for dark mode
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
        onError: (error) => {
            console.error("Error updating theme:", error);
            // Optionally, you could revert the theme in case of error
            // document.documentElement.classList.remove("dark");
        },
    });

    return { theme, toggleTheme };
};

export default useTheme;
