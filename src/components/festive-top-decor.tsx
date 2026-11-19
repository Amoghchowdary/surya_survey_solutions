import { type CSSProperties } from "react";

type FestiveTopDecorProps = {
  context?: "site" | "gate";
};

const LOOP_COUNT = 6;
const LEAF_COUNT = 16;
const GANESH_POINTS = [18, 50, 82] as const;

export function FestiveTopDecor({ context = "site" }: FestiveTopDecorProps) {
  return (
    <div
      className={`festive-top-decor festive-top-decor-${context}`}
      aria-hidden="true"
    >
      <div className="festive-top-rope" />
      <div className="festive-mango-strip">
        {Array.from({ length: LEAF_COUNT }).map((_, index) => (
          <span
            key={`leaf-${index}`}
            className="festive-mango-leaf"
            style={{ "--leaf-tilt": `${-18 + (index % 5) * 9}deg` } as CSSProperties}
          />
        ))}
      </div>
      <div className="festive-marigold-row">
        {Array.from({ length: LOOP_COUNT }).map((_, index) => (
          <span
            key={`loop-${index}`}
            className="festive-marigold-loop"
            style={{
              "--loop-drop": `${34 + (index % 2) * 10}px`,
              "--loop-width": `${96 + (index % 3) * 22}px`,
            } as CSSProperties}
          >
            <span className="festive-loop-flowers">🟠🟡🟠🟡🟠</span>
          </span>
        ))}
      </div>
      {GANESH_POINTS.map((left, index) => (
        <div key={left} className="festive-hanger" style={{ left: `${left}%`, top: 0 }}>
          <span className="festive-hanger-string" />
          <span className="festive-hanger-bead" />
          <span className="festive-ganesh-medallion">🐘</span>
          <span className="festive-bell">🔔</span>
        </div>
      ))}
    </div>
  );
}
