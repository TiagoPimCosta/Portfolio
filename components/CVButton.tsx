import React from "react";
import { Button } from "./ui/button";
import { IconDownload } from "@tabler/icons-react";

export default function CVButton() {
  return (
    <Button variant="outline" className="h-10 rounded-full z-50 w-fit" asChild>
      <a href="/TiagoPimCosta_CV_Original.pdf" download className="inline-flex items-center gap-2">
        CV <IconDownload />
      </a>
    </Button>
  );
}
