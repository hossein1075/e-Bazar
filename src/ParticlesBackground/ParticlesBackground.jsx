import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function ParticlesBackground() {
    const [ready, setReady] = useState(false);

    const particlesLoaded = useCallback((container) => {
        console.log("Particles Loaded:", container);
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    if (!ready) return null;

    return (
        <Particles
            id="tsparticles"
            className="particles-bg"
            options={{
                background: {
                    color: "#FEE4D2",
                },
                particles: {
                    number: { value: 120 },
                    size: { value: 0 },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#999999",
                        opacity: 1,
                        width: 1,
                    },
                    move: { enable: true, speed: 3 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" }, 
                        onClick: { enable: true, mode: "push" },     
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { quantity: 4 }, 
                    },
                },
                detectRetina: true,
            }}

            particlesLoaded={particlesLoaded}
        />
    );
}

export default ParticlesBackground;
//  b9a2cf