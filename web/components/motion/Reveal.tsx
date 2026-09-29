"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// One entrance treatment for the whole site: a short fade with a slight rise,
// played once as a block scrolls into view. Keep it that way; if something
// needs to feel different, it probably shouldn't animate.
const DISTANCE = 18; // px
const DURATION = 0.45; // s
const STAGGER = 0.07; // s between items in a RevealGroup
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const VIEWPORT = { once: true, margin: "-100px" } as const;

const tags = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  dl: motion.dl,
  article: motion.article,
  aside: motion.aside,
};

type Tag = keyof typeof tags;

type RevealProps = {
  as?: Tag;
  className?: string;
  children: ReactNode;
};

function fadeUp(reduce: boolean): Variants {
  return {
    hidden: { opacity: 0, y: DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: DURATION, ease: EASE_OUT },
    },
  };
}

// `data-reveal` lets globals.css force these elements visible for users who
// prefer reduced motion (and for no-JS visitors), from the very first paint.

/** Animates a block in as one unit when it scrolls into view. */
export function Reveal({ as = "div", className, children }: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const Component = tags[as] as typeof motion.div;
  return (
    <Component
      data-reveal=""
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp(reduce)}
    >
      {children}
    </Component>
  );
}

/**
 * A grid or list whose RevealItem children enter one after another.
 * The group itself doesn't move; only its items do.
 */
export function RevealGroup({ as = "div", className, children }: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const Component = tags[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : STAGGER } },
      }}
    >
      {children}
    </Component>
  );
}

/** A child of RevealGroup. Inherits the group's in-view trigger. */
export function RevealItem({ as = "div", className, children }: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const Component = tags[as] as typeof motion.div;
  return (
    <Component data-reveal="" className={className} variants={fadeUp(reduce)}>
      {children}
    </Component>
  );
}

/**
 * One-time entrance on page load, for above-the-fold content that is never
 * "scrolled into". Slightly slower and delayed so it follows the page paint.
 */
export function LoadIn({ className, children }: Omit<RevealProps, "as">) {
  const reduce = useReducedMotion() ?? false;
  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.6, delay: 0.15, ease: EASE_OUT }
      }
    >
      {children}
    </motion.div>
  );
}
