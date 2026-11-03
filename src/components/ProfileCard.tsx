import { useState } from 'react';

interface FocusArea {
  key: string;
  label: string;
  description: string;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    key: 'ai',
    label: 'Artificial Intelligence',
    description:
      'Exploring how intelligent systems reason, plan, and make decisions, built on strong problem-solving and data structure foundations.',
  },
  {
    key: 'ml',
    label: 'Machine Learning',
    description:
      'Understanding how models learn patterns from data, from core algorithms to hands-on experimentation with Python.',
  },
];

const METRICS = [
  { value: '2nd', label: 'Year' },
  { value: '9.2', label: 'CGPA' },
  { value: 'AI/ML', label: 'Branch' },
];

export default function ProfileCard() {
  const [activeKey, setActiveKey] = useState(FOCUS_AREAS[0].key);
  const activeArea = FOCUS_AREAS.find((area) => area.key === activeKey) ?? FOCUS_AREAS[0];

  return (
    <div className="animate-fade-up relative rounded-2xl border border-rose/60 bg-surface/80 p-6 shadow-[0_0_40px_-8px_rgb(var(--rose)/0.45)] backdrop-blur [animation-delay:150ms] sm:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-canvas font-mono text-xl font-bold text-brand ring-1 ring-brand/60">
          S
        </div>
        <div>
          <p className="text-lg font-semibold text-ink">Siddhi</p>
          <p className="text-sm text-muted">B.Tech in Artificial Intelligence &amp; Machine Learning</p>
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-3 gap-3">
        {METRICS.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-line bg-canvas px-3 py-4 text-center">
            <dt className="mt-1 text-xs uppercase tracking-wider text-muted">{metric.label}</dt>
            <dd className="font-mono text-xl font-bold text-ink sm:text-2xl">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 rounded-xl border border-line bg-canvas p-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Current Focus</p>
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose" aria-hidden />
        </div>

        <div role="tablist" aria-label="Current focus areas" className="mt-4 flex flex-wrap gap-2">
          {FOCUS_AREAS.map((area) => {
            const isActive = area.key === activeKey;
            return (
              <button
                key={area.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveKey(area.key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-rose bg-rose/10 text-rose glow-rose'
                    : 'border-line text-muted hover:border-rose/60 hover:text-ink'
                }`}
              >
                {area.label}
              </button>
            );
          })}
        </div>

        <p key={activeArea.key} role="tabpanel" className="animate-fade-up mt-4 text-sm leading-relaxed text-muted">
          {activeArea.description}
        </p>
      </div>
    </div>
  );
}
