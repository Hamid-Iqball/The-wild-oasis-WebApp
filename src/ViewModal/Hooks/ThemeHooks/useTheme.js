import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTheme, setTheme } from "../../../Modal/Services/themeService";  // Fixed incorrect import
import React from "react";

const useTheme = () => {
    const queryClient = useQueryClient();

    // Fetch stored theme
    const { data: theme = "light", isLoading } = useQuery({
        queryKey: ["theme"],
        queryFn: getTheme,
        staleTime: Infinity,
        onSuccess: (theme) => {
            // Apply theme class immediately when data is loaded
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
        // Initialize theme on first load
        initialData: () => {
            // Check if there's a stored theme or use system preference
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) return storedTheme;
            
            // Use system preference as fallback
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDark ? "dark" : "light";
        }
    });

    // Apply theme effect on component mount
    React.useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

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
        },
    });

    return { theme, toggleTheme, isLoading };
};

export default useTheme;
