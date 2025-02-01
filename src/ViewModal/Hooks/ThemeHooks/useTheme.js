import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTheme,setTheme } from "../../../Modal/Services/themeService,";

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
            const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            return newTheme;
        },
        onSuccess: (newTheme) => {
            queryClient.setQueryData(["theme"], newTheme);

            // Apply class to <html> for dark mode
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
    });

    return { theme, toggleTheme };
};

export default useTheme;
