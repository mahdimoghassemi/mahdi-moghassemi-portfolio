// MUI
import { Box } from "@mui/material";

// components
import { SkillContainer } from "../components";
import { IconCloud } from "@/components/magicui";

// ----------------------------------------------------------------------

const slugs = [
  "html5",
  "css3",
  "typescript",
  "javascript",
  "react",
  "materialui",
  "nextdotjs",
  "tailwindcss",
  "bootstrap",
  "cypress",
  "jest",
  "axios",
  "figma",
  "c",
  "c++",
  "java",
  "python",
  "tensorflow",
  "pytorch",
  "opencv",
  "django",
  "flask",
  "opencv",
  "mysql",
  "postgresql",
  "git",
  "jira",
  "github",
  "gitlab",
  "rest",
  "postman",
  "visualstudiocode",
];

export default function SkillView() {
  return (
    <Box sx={{ backgroundColor: "#1e2a38", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 4rem",
        }}
      >
        <SkillContainer />
        <IconCloud iconSlugs={slugs} />
      </Box>
    </Box>
  );
}
