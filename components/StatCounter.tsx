
import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

interface StatCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
    value,
    suffix = "",
    duration = 2
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimatedRef = useRef(false);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    useEffect(() => {
        if (isInView && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animate(0, value, {
                duration: duration,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (latest) => setCount(Math.floor(latest))
            });
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};
