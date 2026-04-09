"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { ExternalLink, Code } from "lucide-react";

/* ── Fade-in on scroll ───────────────────────────────── */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered list ──────────────────────────────────── */
export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Lore Popup / Tooltip ────────────────────────────── */
export function LorePopup({
  trigger,
  title,
  children,
  className = "",
}: {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 z-[999] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#8b5cf6]/30 bg-[#1a1a2e] p-6 shadow-2xl shadow-purple-500/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#8b5cf6]">{title}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-white/40 transition-colors hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="text-sm leading-7 text-white/70">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Evocati Badge with hover tooltip ────────────────── */
export function EvocatiBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(!hovered)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="evocati-badge cursor-pointer rounded-lg border border-[#bc13fe]/50 bg-[#bc13fe]/10 px-4 py-2 text-sm font-bold text-[#bc13fe] transition-colors hover:bg-[#bc13fe]/20"
      >
        Recognized as Evocati Tester
      </motion.button>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#bc13fe]/30 bg-[#1a1a2e] p-4 text-sm leading-6 text-white/70 shadow-2xl shadow-purple-500/20"
          >
            <p>
              As of 2026, I was selected for the{" "}
              <span className="font-semibold text-[#bc13fe]">
                Evocati Test Flight (ETF)
              </span>{" "}
              for Star Citizen. The ETF is an invite-only, NDA-restricted QA
              group. I am granted access to early builds for each development
              sprint to stress-test new features, identify critical bugs, and
              provide direct technical feedback to the developers.
            </p>
            <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#bc13fe]/30 to-transparent" />
            <p className="mt-2 text-xs text-[#bc13fe]/60">
              Hover or tap to dismiss
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Animated counter ────────────────────────────────── */
export function AnimatedStat({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-5"
    >
      <motion.span
        className="text-3xl font-black text-[#8b5cf6]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {value}
        {suffix}
      </motion.span>
      <span className="mt-1 text-xs text-white/50">{label}</span>
    </motion.div>
  );
}

/* ── Skill bar with animation ────────────────────────── */
export function SkillBar({
  name,
  level,
  color = "#8b5cf6",
}: {
  name: string;
  level: number;
  color?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3">
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="text-white/40">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

/* ── Portfolio Card with lightbox ─────────────────────── */
export function PortfolioCard({
  image,
  title,
  description,
  websiteUrl,
  githubUrl,
}: {
  image: string;
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setLightboxOpen(true)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hover glow overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 bg-[#8b5cf6]/20"
          />
          {/* Hover border glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 rounded-2xl ring-2 ring-[#8b5cf6]/60 ring-inset"
          />
        </div>

        {/* Info bubble on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#8b5cf6]/30 bg-[#1a1a2e]/95 px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-[#8b5cf6]">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm"
              onClick={() => setLightboxOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 z-[999] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#8b5cf6]/30 bg-[#1a1a2e] shadow-2xl shadow-purple-500/10"
            >
              {/* Preview image */}
              <div className="relative aspect-video overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover" />
              </div>

              {/* Info + buttons */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mb-5 text-sm text-[#8b5cf6]">{description}</p>

                <div className="flex gap-3">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] px-4 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Go to Website
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-all hover:border-[#8b5cf6]/40 hover:bg-white/10"
                  >
                    <Code className="h-4 w-4" />
                    Check GitHub
                  </a>
                </div>

                <button
                  onClick={() => setLightboxOpen(false)}
                  className="mt-4 w-full cursor-pointer text-center text-xs text-white/30 transition-colors hover:text-white/60"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Expandable detail section ───────────────────────── */
export function ExpandableSection({
  title,
  preview,
  children,
}: {
  title: string;
  preview: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
      >
        <div>
          <h4 className="font-bold text-white">{title}</h4>
          {!expanded && (
            <p className="mt-1 text-sm text-white/40">{preview}</p>
          )}
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          className="text-[#8b5cf6]"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 px-5 pb-5"
          >
            <div className="pt-4 text-sm leading-7 text-white/70">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
