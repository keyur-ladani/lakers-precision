import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useWatermarkedImage } from "@/lib/useWatermarkedImage";
import floorSprings1 from "@/assets/fllor-springis-lakers.png"

import floor1 from "@/assets/Fllor-springs/floor-1.jpg"
import floor2 from "@/assets/Fllor-springs/floor-2.jpg"
import floor3 from "@/assets/Fllor-springs/floor-3.jpg"
import floor4 from "@/assets/Fllor-springs/floor-4.jpg"
import floor5 from "@/assets/Fllor-springs/floor-5.jpg"
import floor6 from "@/assets/Fllor-springs/floor-6.jpg"
import floor7 from "@/assets/Fllor-springs/floor-7.jpg"
import floor8 from "@/assets/Fllor-springs/floor-8.jpg"
import floor9 from "@/assets/Fllor-springs/floor-9.jpg"
// import floor10 from "@/assets/Fllor-springs/floor-10.jpg"
import floor11 from "@/assets/Fllor-springs/floor-11.jpg"

import door1 from "@/assets/DOOR CLOSER/door-1.jpg"
import door2 from "@/assets/DOOR CLOSER/door-2.jpg"
import door3 from "@/assets/DOOR CLOSER/door-3.jpg"
import door4 from "@/assets/DOOR CLOSER/door-4.jpg"
import door5 from "@/assets/DOOR CLOSER/door-5.jpg"
import door6 from "@/assets/DOOR CLOSER/door-6.jpg"
// import door7 from "@/assets/DOOR CLOSER/door-7.jpg"
import door8 from "@/assets/DOOR CLOSER/door-8.jpg"

import patch1 from "@/assets/PATCH FITTINGS/patch-1.jpg"
import patch2 from "@/assets/PATCH FITTINGS/patch-2.jpg"
// import patch3 from "@/assets/PATCH FITTINGS/patch-3.jpg"
// import patch4 from "@/assets/PATCH FITTINGS/patch-4.jpg"
import patch5 from "@/assets/PATCH FITTINGS/patch-5.jpg"
import patch6 from "@/assets/PATCH FITTINGS/patch-6.jpg"
import patch7 from "@/assets/PATCH FITTINGS/patch-7.jpg"
import patch8 from "@/assets/PATCH FITTINGS/patch-8.jpg"
import patch9 from "@/assets/PATCH FITTINGS/patch-9.jpg"


import lock1 from "@/assets/GLASS DOOR LOCK/lock-1.jpg"
import lock2 from "@/assets/GLASS DOOR LOCK/lock-2.jpg"
import lock3 from "@/assets/GLASS DOOR LOCK/lock-3.jpg"
import lock4 from "@/assets/GLASS DOOR LOCK/lock-4.jpg"
import lock5 from "@/assets/GLASS DOOR LOCK/lock-5.jpg"
import lock6 from "@/assets/GLASS DOOR LOCK/lock-6.jpg"
import lock7 from "@/assets/GLASS DOOR LOCK/lock-7.jpg"
import lock8 from "@/assets/GLASS DOOR LOCK/lock-8.jpg"
import lock9 from "@/assets/GLASS DOOR LOCK/lock-9.jpg"
import lock10 from "@/assets/GLASS DOOR LOCK/lock-10.jpg"
import lock11 from "@/assets/GLASS DOOR LOCK/lock-11.jpg"
import lock12 from "@/assets/GLASS DOOR LOCK/lock-12.jpg"


import shower1 from "@/assets/SHOWER HINGES/shower-1.jpg"
import shower2 from "@/assets/SHOWER HINGES/shower-2.jpg"
import shower3 from "@/assets/SHOWER HINGES/shower-3.jpg"
import shower4 from "@/assets/SHOWER HINGES/shower-4.jpg"
import shower5 from "@/assets/SHOWER HINGES/shower-5.jpg"
import shower6 from "@/assets/SHOWER HINGES/shower-6.jpg"
import shower7 from "@/assets/SHOWER HINGES/shower-7.jpg"
import shower8 from "@/assets/SHOWER HINGES/shower-8.jpg"
import shower9 from "@/assets/SHOWER HINGES/shower-9.jpg"
import shower10 from "@/assets/SHOWER HINGES/shower-10.jpg"
import shower11 from "@/assets/SHOWER HINGES/shower-11.jpg"


import doorRoller1 from "@/assets/SLIDING DOOR ROLLER/door-roller-1.jpg"
import doorRoller2 from "@/assets/SLIDING DOOR ROLLER/door-roller-2.jpg"
import doorRoller3 from "@/assets/SLIDING DOOR ROLLER/door-roller-3.jpg"
import doorRoller4 from "@/assets/SLIDING DOOR ROLLER/door-roller-4.jpg"
import doorRoller5 from "@/assets/SLIDING DOOR ROLLER/door-roller-5.jpg"
import doorRoller6 from "@/assets/SLIDING DOOR ROLLER/door-roller-6.jpg"
import doorRoller7 from "@/assets/SLIDING DOOR ROLLER/door-roller-7.jpg"
import doorRoller8 from "@/assets/SLIDING DOOR ROLLER/door-roller-8.jpg"
import doorRoller9 from "@/assets/SLIDING DOOR ROLLER/door-roller-9.jpeg"
import doorRoller10 from "@/assets/SLIDING DOOR ROLLER/door-roller-10.jpg"


import spider1 from "@/assets/SPIDER FITTINGS/spider-1.webp"
import spider2 from "@/assets/SPIDER FITTINGS/spider-2.jpg"
import spider3 from "@/assets/SPIDER FITTINGS/spider-3.jpg"
import spider4 from "@/assets/SPIDER FITTINGS/spider-4.jpg"
import spider5 from "@/assets/SPIDER FITTINGS/spider-5.jpg"

import handel1 from "@/assets/GLASS DOOR HANDLE/handel1.jpg"
import handel2 from "@/assets/GLASS DOOR HANDLE/handel2.jpg"
import handel3 from "@/assets/GLASS DOOR HANDLE/handel3.jpg"
import handel4 from "@/assets/GLASS DOOR HANDLE/handel4.jpg"
import handel5 from "@/assets/GLASS DOOR HANDLE/handel5.jpg"
import handel6 from "@/assets/GLASS DOOR HANDLE/handel6.jpg"
import handel7 from "@/assets/GLASS DOOR HANDLE/handel7.jpg"
import handel8 from "@/assets/GLASS DOOR HANDLE/handel8.jpg"
import handel9 from "@/assets/GLASS DOOR HANDLE/handel9.jpg"
import handel10 from "@/assets/GLASS DOOR HANDLE/handel10.jpg"
import handel11 from "@/assets/GLASS DOOR HANDLE/handel11.jpg"
import handel12 from "@/assets/GLASS DOOR HANDLE/handel12.jpg"
import handel13 from "@/assets/GLASS DOOR HANDLE/handel13.jpg"
import handel14 from "@/assets/GLASS DOOR HANDLE/handel14.jpg"

import slim1 from "@/assets/SLIM PARTITION/slim-partition1.jpg"
import slim2 from "@/assets/SLIM PARTITION/slim-partition2.jpg"
import slim3 from "@/assets/SLIM PARTITION/slim-partition3.jpg"
import slim4 from "@/assets/SLIM PARTITION/slim-partition4.jpg"

import productFloorSpring from "@/assets/product-floor-spring.jpg";
import productPatch from "@/assets/product-patch.jpg";
import productLock from "@/assets/product-lock.jpg";
import productSpider from "@/assets/product-spider.jpg";
import productDoorCloser from "@/assets/product-door-closer.jpg";
import productMortise from "@/assets/product-mortise.jpg";
import productHandle from "@/assets/product-handle.jpg";
import productShower from "@/assets/product-shower.jpg";
import watermarkLogo from "@/assets/AllenLogo.png";
const categories = [
  { id: "all", name: "All Products" },
  { id: "floor-springs", name: "Floor Springs" },
  { id: "door-closers", name: "Door Closers" },
  { id: "patch-fittings", name: "Patch Fittings" },
  { id: "glass-locks", name: "Glass Locks" },
  { id: "shower-hinges", name: "Shower Hinges" },
  { id: "sliding-door-roller", name: "Sliding Door Roller" },
  { id: "spider-fittings", name: "Spider Fittings" },
  { id: "glass-door-handles", name: "Glass Door Handles" },
  { id: "slim-partition", name: "Slim Partition" }
];

// const materials = ["All", "SS 202", "SS 304"];
// const finishes = ["All", "Satin", "Glossy", "Combi"];

const products = [
  // {
  //   id: 1,
  //   name: "Floor Spring",
  //   code: "LFS-02",
  //   category: "Spider Fittings",
  //   material: "SS 304",
  //   finish: "Satin",
  //   image: productFloorSpring,
  //   description: "Heavy-duty hydraulic floor spring for glass doors up to 120kg",
  // },
  // {
  //   id: 2,
  //   name: "Patch Fitting LPF-01",
  //   code: "LPF-01",
  //   category: "patch-fittings",
  //   material: "SS 304",
  //   finish: "Glossy",
  //   image: productPatch,
  //   description: "Glass to glass 180° patch fitting with beveled edges",
  // },
  // {
  //   id: 3,
  //   name: "Glass Lock LGL-05",
  //   code: "LGL-05",
  //   category: "glass-locks",
  //   material: "SS 202",
  //   finish: "Satin",
  //   image: productLock,
  //   description: "Center lock for 10-12mm tempered glass doors",
  // },
  // {
  //   id: 4,
  //   name: "Spider Fitting LSF-04",
  //   code: "LSF-04",
  //   category: "spider-fittings",
  //   material: "SS 304",
  //   finish: "Glossy",
  //   image: productSpider,
  //   description: "4-arm spider connector for structural glazing",
  // },
  // {
  //   id: 6,
  //   name: "Mortise Handle LMH-31",
  //   code: "LMH-31",
  //   category: "mortise-handles",
  //   material: "SS 304",
  //   finish: "Combi",
  //   image: productMortise,
  //   description: "Premium lever handle with rose escutcheon",
  // },
  // {
  //   id: 7,
  //   name: "Glass Handle H-Type LGH-01",
  //   code: "LGH-01",
  //   category: "glass-door-handles",
  //   material: "SS 304",
  //   finish: "Satin",
  //   image: productHandle,
  //   description: "H-Type pull handle for frameless glass doors",
  // },
  // {
  //   id: 8,
  //   name: "Shower Hinge LSH-90",
  //   code: "LSH-90",
  //   category: "shower-hinges",
  //   material: "SS 304",
  //   finish: "Glossy",
  //   image: productShower,
  //   description: "90° glass to wall shower hinge with soft close",
  // },
  // {
  //   id: 9,
  //   name: "Floor Spring LFS-03",
  //   code: "LFS-03",
  //   category: "Spider Fittings",
  //   material: "SS 304",
  //   finish: "Glossy",
  //   image: productFloorSpring,
  //   description: "Premium floor spring with 90° hold open function",
  // },
  // {
  //   id: 10,
  //   name: "Glass Handle D-Type LGH-02",
  //   code: "LGH-02",
  //   category: "glass-door-handles",
  //   material: "SS 202",
  //   finish: "Satin",
  //   image: productHandle,
  //   description: "D-Type curved handle for elegant glass entrances",
  // },
  // {
  //   id: 11,
  //   name: "Patch Fitting LPF-02",
  //   code: "LPF-02",
  //   category: "patch-fittings",
  //   material: "SS 304",
  //   finish: "Satin",
  //   image: productPatch,
  //   description: "Glass to wall 90° patch fitting for partitions",
  // },
  // {
  //   id: 12,
  //   name: "Mortise Handle LMH-45",
  //   code: "LMH-45",
  //   category: "mortise-handles",
  //   material: "SS 304",
  //   finish: "Glossy",
  //   image: productMortise,
  //   description: "Modern slim profile lever handle design",
  // },
 
  {
    id: 1,
    name: "Floor Spring",
    image: floor1,
    category: "floor-springs"
  },
  {
    id: 2,
    name: "Floor Spring",
    image: floor2,
    category: "floor-springs"
  },
  {
    id: 3,
    name: "Floor Spring",
    image: floor3,
    category: "floor-springs"
  },
  {
    id: 4,
    name: "Floor Spring",
    image: floor4,
    category: "floor-springs"
  },
  {
    id: 5,
    name: "Floor Spring",
    image: floor5,
    category: "floor-springs"
  },
  {
    id: 6,
    name: "Floor Spring",
    image: floor6,
    category: "floor-springs"
  },
  {
    id: 7,
    name: "Floor Spring",
    image: floor7,
    category: "floor-springs"
  },
  {
    id: 8,
    name: "Floor Spring",
    image: floor8,
    category: "floor-springs"
  },
  {
    id: 9,
    name: "Floor Spring",
    image: floor9,
    category: "floor-springs"
  },
  // {
  //   id: 10,
  //   name: "Floor Spring",
  //   image: floor10,
  //   category: "floor-springs"
  // },
  {
    id: 11,
    name: "Floor Spring",
    image: floor11,
    category: "floor-springs"
  },

  {
    id: 12,
    name: "Door Closer",
    image: door1,
    category: "door-closers"
  },
  {
    id: 13,
    name: "Door Closer",
    image: door2,
    category: "door-closers"
  },
  {
    id: 14,
    name: "Door Closer",
    image: door3,
    category: "door-closers"
  },
  {
    id: 15,
    name: "Door Closer",
    image: door4,
    category: "door-closers"
  },
  {
    id: 16,
    name: "Door Closer",
    image: door5,
    category: "door-closers"
  },
  {
    id: 17,
    name: "Door Closer",
    image: door6,
    category: "door-closers"
  },
  // {
  //   id: 18,
  //   name: "Door Closer",
  //   image: door7,
  //   category: "door-closers"
  // },
  {
    id: 19,
    name: "Door Closer",
    image: door8,
    category: "door-closers"
  },

  {
    id: 20,
    name: "Patch Fittings",
    image: patch1,
    category: "patch-fittings"
  },
  {
    id: 21,
    name: "Patch Fittings",
    image: patch2,
    category: "patch-fittings"
  },
  // {
  //   id: 22,
  //   name: "Patch Fittings",
  //   image: patch3,
  //   category: "patch-fittings"
  // },
  // {
  //   id: 23,
  //   name: "Patch Fittings",
  //   image: patch4,
  //   category: "patch-fittings"
  // },
  // {
  //   id: 24,
  //   name: "Patch Fittings",
  //   image: patch5,
  //   category: "patch-fittings"
  // },
  // {
  //   id: 25,
  //   name: "Patch Fittings",
  //   image: patch6,
  //   category: "patch-fittings"
  // },
  {
    id: 26,
    name: "Patch Fittings",
    image: patch7,
    category: "patch-fittings"
  },
  {
    id: 27,
    name: "Patch Fittings",
    image: patch8,
    category: "patch-fittings"
  },
  {
    id: 28,
    name: "Patch Fittings",
    image: patch9,
    category: "patch-fittings"
  },

  {
    id: 29,
    name: "Glass Locks",
    image: lock1,
    category: "glass-locks"
  },
  {
    id: 30,
    name: "Glass Locks",
    image: lock2,
    category: "glass-locks"
  },
  {
    id: 31,
    name: "Glass Locks",
    image: lock3,
    category: "glass-locks"
  },
  {
    id: 32,
    name: "Glass Locks",
    image: lock4,
    category: "glass-locks"
  },
  // {
  //   id: 33,
  //   name: "Glass Locks",
  //   image: lock5,
  //   category: "glass-locks"
  // },
  // {
  //   id: 34,
  //   name: "Glass Locks",
  //   image: lock6,
  //   category: "glass-locks"
  // },
  // {
  //   id: 35,
  //   name: "Glass Locks",
  //   image: lock7,
  //   category: "glass-locks"
  // },
  {
    id: 36,
    name: "Glass Locks",
    image: lock8,
    category: "glass-locks"
  },
  {
    id: 37,
    name: "Glass Locks",
    image: lock9,
    category: "glass-locks"
  },
  {
    id: 38,
    name: "Glass Locks",
    image: lock10,
    category: "glass-locks"
  },
  {
    id: 39,
    name: "Glass Locks",
    image: lock11,
    category: "glass-locks"
  },
  {
    id: 40,
    name: "Glass Locks",
    image: lock12,
    category: "glass-locks"
  },

  {
    id: 41,
    name: "Shower Hinges",
    image: shower1,
    category: "shower-hinges"
  },
  {
    id: 42,
    name: "Shower Hinges",
    image: shower2,
    category: "shower-hinges"
  },
  {
    id: 43,
    name: "Shower Hinges",
    image: shower3,
    category: "shower-hinges"
  },
  {
    id: 44,
    name: "Shower Hinges",
    image: shower4,
    category: "shower-hinges"
  },
  {
    id: 45,
    name: "Shower Hinges",
    image: shower5,
    category: "shower-hinges"
  },
  {
    id: 46,
    name: "Shower Hinges",
    image: shower6,
    category: "shower-hinges"
  },
  {
    id: 47,
    name: "Shower Hinges",
    image: shower7,
    category: "shower-hinges"
  },
  {
    id: 48,
    name: "Shower Hinges",
    image: shower8,
    category: "shower-hinges"
  },
  {
    id: 49,
    name: "Shower Hinges",
    image: shower9,
    category: "shower-hinges"
  },
  {
    id: 50,
    name: "Shower Hinges",
    image: shower10,
    category: "shower-hinges"
  },
  {
    id: 51,
    name: "Shower Hinges",
    image: shower11,
    category: "shower-hinges"
  },

  {
    id: 52,
    name: "Sliding Door Roller",
    image: doorRoller1,
    category: "sliding-door-roller"
  },
  {
    id: 53,
    name: "Sliding Door Roller",
    image: doorRoller2,
    category: "sliding-door-roller"
  },
  {
    id: 54,
    name: "Sliding Door Roller",
    image: doorRoller3,
    category: "sliding-door-roller"
  },
  {
    id: 55,
    name: "Sliding Door Roller",
    image: doorRoller4,
    category: "sliding-door-roller"
  },
  {
    id: 56,
    name: "Sliding Door Roller",
    image: doorRoller5,
    category: "sliding-door-roller"
  },
  {
    id: 57,
    name: "Sliding Door Roller",
    image: doorRoller6,
    category: "sliding-door-roller"
  },
  {
    id: 58,
    name: "Sliding Door Roller",
    image: doorRoller7,
    category: "sliding-door-roller"
  },
  {
    id: 59,
    name: "Sliding Door Roller",
    image: doorRoller8,
    category: "sliding-door-roller"
  },
  {
    id: 60,
    name: "Sliding Door Roller",
    image: doorRoller9,
    category: "sliding-door-roller"
  },
  {
    id: 61,
    name: "Sliding Door Roller",
    image: doorRoller10,
    category: "sliding-door-roller"
  },

  {
    id: 62,
    name: "Spider Fitting",
    image: spider1,
    category: "spider-fittings"
  },
  {
    id: 63,
    name: "Spider Fitting",
    image: spider2,
    category: "spider-fittings"
  },
  {
    id: 64,
    name: "Spider Fitting",
    image: spider3,
    category: "spider-fittings"
  },
  {
    id: 65,
    name: "Spider Fitting",
    image: spider4,
    category: "spider-fittings"
  },
  {
    id: 66,
    name: "Spider Fitting",
    image: spider5,
    category: "spider-fittings"
  },

  {
    id: 67,
    name: "Glass Door Handles",
    image: handel1,
    category: "glass-door-handles"
  },
  {
    id: 68,
    name: "Glass Door Handles",
    image: handel2,
    category: "glass-door-handles"
  },
  {
    id: 69,
    name: "Glass Door Handles",
    image: handel3,
    category: "glass-door-handles"
  },
  {
    id: 70,
    name: "Glass Door Handles",
    image: handel4,
    category: "glass-door-handles"
  },
  // {
  //   id: 71,
  //   name: "Glass Door Handles",
  //   image: handel5,
  //   category: "glass-door-handles"
  // },
  {
    id: 72,
    name: "Glass Door Handles",
    image: handel6,
    category: "glass-door-handles"
  },
  // {
  //   id: 73,
  //   name: "Glass Door Handles",
  //   image: handel7,
  //   category: "glass-door-handles"
  // },
  {
    id: 74,
    name: "Glass Door Handles",
    image: handel8,
    category: "glass-door-handles"
  },
  {
    id: 75,
    name: "Glass Door Handles",
    image: handel9,
    category: "glass-door-handles"
  },
  {
    id: 76,
    name: "Glass Door Handles",
    image: handel10,
    category: "glass-door-handles"
  },
  {
    id: 77,
    name: "Glass Door Handles",
    image: handel11,
    category: "glass-door-handles"
  },
  // {
  //   id: 78,
  //   name: "Glass Door Handles",
  //   image: handel12,
  //   category: "glass-door-handles"
  // },
  {
    id: 79,
    name: "Glass Door Handles",
    image: handel13,
    category: "glass-door-handles"
  },
  {
    id: 80,
    name: "Glass Door Handles",
    image: handel14,
    category: "glass-door-handles"
  },
  {
    id: 81,
    name: "Glass Door Handles",
    image: slim1,
    category: "slim-partition"
  },
  {
    id: 82,
    name: "Glass Door Handles",
    image: slim2,
    category: "slim-partition"
  },
  {
    id: 83,
    name: "Glass Door Handles",
    image: slim3,
    category: "slim-partition"
  },
  {
    id: 84,
    name: "Glass Door Handles",
    image: slim4,
    category: "slim-partition"
  }

];
export type WatermarkPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "tile";

export interface WatermarkOptions {
  image: string;
  watermark: string;
  opacity?: number;
  watermarkSize?: number;
  spacing?: number;
  position?: WatermarkPosition;
  tileGap?: number;
  rotation?: number;
  outputType?: "image/png" | "image/jpeg" | "image/webp";
  outputQuality?: number;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(new Error(`Failed to load image: ${src} (${err})`));
    img.src = src;
  });
}

export async function addWatermark(options: WatermarkOptions): Promise<string> {
  const {
    image,
    watermark,
    opacity = 0.4,
    watermarkSize = 0.25,
    spacing = 16,
    position = "bottom-right",
    tileGap = 40,
    rotation = 0,
    outputType = "image/png",
    outputQuality = 0.92,
  } = options;

  const [baseImg, markImg] = await Promise.all([loadImage(image), loadImage(watermark)]);

  const canvas = document.createElement("canvas");
  canvas.width = baseImg.naturalWidth;
  canvas.height = baseImg.naturalHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get 2D canvas context");

  ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

  const wmWidth = canvas.width * watermarkSize;
  const wmHeight = wmWidth * (markImg.naturalHeight / markImg.naturalWidth);

  const drawMark = (x: number, y: number, w: number, h: number) => {
    ctx.save();
    ctx.globalAlpha = opacity;
    if (rotation !== 0) {
      const cx = x + w / 2;
      const cy = y + h / 2;
      ctx.translate(cx, cy);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(markImg, -w / 2, -h / 2, w, h);
    } else {
      ctx.drawImage(markImg, x, y, w, h);
    }
    ctx.restore();
  };

  if (position === "tile") {
    const stepX = wmWidth + tileGap;
    const stepY = wmHeight + tileGap;
    for (let y = spacing; y < canvas.height; y += stepY) {
      for (let x = spacing; x < canvas.width; x += stepX) {
        drawMark(x, y, wmWidth, wmHeight);
      }
    }
  } else {
    let x = 0;
    let y = 0;

    switch (position) {
      case "top-left":
        x = spacing;
        y = spacing;
        break;
      case "top-right":
        x = canvas.width - wmWidth - spacing;
        y = spacing;
        break;
      case "bottom-left":
        x = spacing;
        y = canvas.height - wmHeight - spacing;
        break;
      case "center":
        x = (canvas.width - wmWidth) / 2;
        y = (canvas.height - wmHeight) / 2;
        break;
      case "bottom-right":
      default:
        x = canvas.width - wmWidth - spacing;
        y = canvas.height - wmHeight - spacing;
        break;
    }

    drawMark(x, y, wmWidth, wmHeight);
  }

  return canvas.toDataURL(outputType, outputQuality);
}

export async function addWatermarkAsBlob(options: WatermarkOptions): Promise<Blob> {
  const dataUrl = await addWatermark(options);
  const res = await fetch(dataUrl);
  return res.blob();
}


export function useWatermarkedImage(
  src: string,
  watermarkSrc: string,
  options?: any
) {
  const [result, setResult] = useState<string>(src);

  useEffect(() => {
    let cancelled = false;

    addWatermark({ image: src, watermark: watermarkSrc, ...options })
      .then((dataUrl) => {
        if (!cancelled) setResult(dataUrl);
      })
      .catch((err) => {
        console.error("Watermarking failed, falling back to original image:", err);
        if (!cancelled) setResult(src);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, watermarkSrc, JSON.stringify(options)]);

  return result;
}
const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedMaterial, setSelectedMaterial] = useState("All");
  // const [selectedFinish, setSelectedFinish] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const selectedCategory = searchParams.get("category") || "all";

  const setCategory = (category: string) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      // const matchesMaterial =
      //   selectedMaterial === "All" || product.material === selectedMaterial;
      // const matchesFinish =
      //   selectedFinish === "All" || product.finish === selectedFinish;
      // const matchesSearch =
      // searchQuery === "" ||
      // product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // product.code.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory;
    });
  }, [selectedCategory]);

  const clearFilters = () => {
    setCategory("all");
    // setSelectedMaterial("All");
    // setSelectedFinish("All");
    // setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "all"
  // selectedMaterial !== "All" ||
  // selectedFinish !== "All" ||
  // searchQuery !== "";
  const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
    const watermarkedSrc = useWatermarkedImage(src, watermarkLogo, {
      opacity: 0.30,
      watermarkSize: 0.12,
      position: "tile",
      tileGapX: 40,
      tileGapY: 60,
      rotation: 45,
    });

    return (
      <img
        src={watermarkedSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    );
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mt-4 mb-6">
              Architectural Hardware{" "}
              <span className="text-accent">Collection</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              Explore our comprehensive range of premium stainless steel hardware
              solutions for every architectural need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block w-64 shrink-0"
            >
              <div className="sticky top-28 space-y-8">
                {/* Search */}
                {/* <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Search
                  </label>
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div> */}

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Categories
                  </label>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                          }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                {/* <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Material
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {materials.map((material) => (
                      <button
                        key={material}
                        onClick={() => setSelectedMaterial(material)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedMaterial === material
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Finish */}
                {/* <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Finish
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {finishes.map((finish) => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedFinish === finish
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    <X size={16} />
                    Clear Filters
                  </Button>
                )}
              </div>
            </motion.aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex-1"
              >
                <Filter size={18} />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    !
                  </span>
                )}
              </Button>
              {/* <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div> */}
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-muted rounded-xl p-6 space-y-6"
              >
                {/* Categories */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Categories
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-foreground"
                          }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material & Finish */}
                {/* <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Material
                    </label>
                    <select
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    >
                      {materials.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Finish
                    </label>
                    <select
                      value={selectedFinish}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    >
                      {finishes.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}

                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                )}
              </motion.div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground text-sm">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground mb-4">
                    No products found matching your criteria.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="product-card group"
                    >
                      {/* Image */}
                      <div className="aspect-square overflow-hidden bg-white">
                        {/* <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        /> */}
                        <ProductImage src={product.image} alt={product.name} />
                      </div>
                      {/* Content */}
                      {/* <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3> */}
                          {/* <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
                            {product.code}
                          </span> */}
                        {/* </div> */}
                        {/* <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p> */}
                        {/* <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {product.material}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent-dark font-medium">
                            {product.finish}
                          </span>
                        </div> */}
                      {/* // </div> */}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
