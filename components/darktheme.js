export default function DarkTheme() {
    return(
        <style jsx global>
            {`
            :root {
                --theme-backgorund: rgb(36, 36, 36);
                --theme-text: rgb(231, 228, 228);
            }
            `}
        </style>
    )
}