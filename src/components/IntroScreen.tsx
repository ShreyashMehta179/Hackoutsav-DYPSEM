import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= CONSTANTS ================= */

const FLOATING_SYMBOLS = [
  "{ }","< />","⚛","</>","0 1","λ","∞","<DYPSEM HACKATHON>"
];

const BAND_ITEMS = [
  "BIGGEST HACKATHON",
  "DYPSEM HACKATHON",
  "HACKOUTSAV 2026",
  "24 HOUR NATIONAL HACKATHON",
];

/* ================= TYPES ================= */

type ParticleData = {
  startX:number
  startY:number
  endX:number
  endY:number
}

type FloatingItem = {
  id:number
  symbol:string
  x:number
  y:number
  duration:number
  delay:number
}

/* ================= BACKGROUND ================= */

const TechBackground = () => (
  <div className="absolute inset-0 pointer-events-none">

    <motion.div
      className="absolute inset-0"
      animate={{backgroundPosition:["0px 0px","60px 60px"]}}
      transition={{duration:8,repeat:Infinity,ease:"linear"}}
      style={{
        backgroundImage:`
        linear-gradient(hsl(var(--primary)/0.08) 1px,transparent 1px),
        linear-gradient(90deg,hsl(var(--primary)/0.08) 1px,transparent 1px)
        `,
        backgroundSize:"60px 60px"
      }}
    />

  </div>
);

/* ================= RIBBON TAPE ================= */

const HackathonBands = () => {

  const repeated=[...BAND_ITEMS,...BAND_ITEMS,...BAND_ITEMS,...BAND_ITEMS];

  const ribbonTextStyle={
    fontFamily:"Orbitron, sans-serif",
    letterSpacing:"0.35em",
    textShadow:`
      0 0 8px hsl(var(--primary)/0.9),
      0 0 16px hsl(var(--primary)/0.6)
    `
  }

  return(
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* TOP RIBBON */}

      <div
        className="absolute top-0 left-0 w-full backdrop-blur-md border-b"
        style={{
          borderColor:"hsl(var(--primary)/0.4)",
          background:"linear-gradient(90deg, transparent, hsl(var(--primary)/0.08), transparent)"
        }}
      >

        <motion.div
          className="flex whitespace-nowrap items-center py-2 md:py-3"
          animate={{x:["0%","-50%"]}}
          transition={{duration:18,repeat:Infinity,ease:"linear"}}
        >

          {repeated.map((text,i)=>(

            <div
              key={i}
              className="flex items-center text-primary text-[10px] sm:text-xs md:text-sm font-bold uppercase"
              style={ribbonTextStyle}
            >

              <span className="mx-4 md:mx-6">{text}</span>

              <span className="mx-4 md:mx-6 opacity-70">|</span>

            </div>

          ))}

        </motion.div>

      </div>


      {/* BOTTOM RIBBON */}

      <div
        className="absolute bottom-0 left-0 w-full backdrop-blur-md border-t"
        style={{
          borderColor:"hsl(var(--primary)/0.4)",
          background:"linear-gradient(90deg, transparent, hsl(var(--primary)/0.08), transparent)"
        }}
      >

        <motion.div
          className="flex whitespace-nowrap items-center py-2 md:py-3"
          animate={{x:["-50%","0%"]}}
          transition={{duration:18,repeat:Infinity,ease:"linear"}}
        >

          {repeated.map((text,i)=>(

            <div
              key={i}
              className="flex items-center text-primary text-[10px] sm:text-xs md:text-sm font-bold uppercase"
              style={ribbonTextStyle}
            >

              <span className="mx-4 md:mx-6">{text}</span>

              <span className="mx-4 md:mx-6 opacity-70">|</span>

            </div>

          ))}

        </motion.div>

      </div>

    </div>
  )
}

/* ================= FLOATING SYMBOLS ================= */

const FloatingElements = () => {

  const items:FloatingItem[]=useMemo(()=>{

    const width=window.innerWidth
    const height=window.innerHeight

    const count = width < 768 ? 8 : 18

    return Array.from({length:count},(_,i)=>({
      id:i,
      symbol:FLOATING_SYMBOLS[Math.floor(Math.random()*FLOATING_SYMBOLS.length)],
      x:Math.random()*width,
      y:Math.random()*height,
      duration:12+Math.random()*10,
      delay:Math.random()*6
    }))

  },[])

  return(
    <div className="absolute inset-0 pointer-events-none">

      {items.map(item=>(
        <motion.div
          key={item.id}
          className="absolute font-mono text-xs md:text-lg"
          initial={{opacity:0,x:item.x,y:item.y}}
          animate={{
            opacity:[0,0.6,0],
            y:[item.y,item.y-200]
          }}
          transition={{
            duration:item.duration,
            repeat:Infinity,
            delay:item.delay
          }}
          style={{
            color:"hsl(var(--primary))",
            textShadow:"0 0 12px hsl(var(--primary)/0.6)"
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

    </div>
  )
}

/* ================= PARTICLE ================= */

const Particle = ({
  startX,startY,endX,endY,delay
}:ParticleData & {delay:number}) => (

  <motion.div
    className="absolute w-[2px] h-[2px] rounded-full bg-primary"
    initial={{x:startX,y:startY,opacity:0,scale:0}}
    animate={{
      x:endX,
      y:endY,
      opacity:[0,1,1,0],
      scale:[0,1.5,1,0]
    }}
    transition={{
      duration:2.2,
      delay,
      ease:"easeInOut"
    }}
  />

)

/* ================= MAGIC TEXT ================= */

const MagicText = ({
  text,className,delay
}:{text:string,className:string,delay:number}) => {

  const [particles,setParticles]=useState<ParticleData[]>([])

  useEffect(()=>{

    const width = window.innerWidth
    const height = window.innerHeight

    const count = width < 768 ? 80 : 200

    const newParticles:ParticleData[]=[]

    for(let i=0;i<count;i++){

      newParticles.push({
        startX:(Math.random()-0.5)*width,
        startY:(Math.random()-0.5)*height,
        endX:(Math.random()-0.5)*260,
        endY:(Math.random()-0.5)*80
      })

    }

    setParticles(newParticles)

  },[])

  return(

    <div className={`relative ${className}`}>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {particles.map((p,i)=>(
          <Particle
            key={i}
            startX={p.startX}
            startY={p.startY}
            endX={p.endX}
            endY={p.endY}
            delay={delay + i*0.002}
          />
        ))}

      </div>

      <motion.div
        initial={{opacity:0,scale:0.95}}
        animate={{opacity:1,scale:1}}
        transition={{delay:delay+2,duration:1}}
        style={{
          color:"hsl(var(--primary))",
          letterSpacing:"0.12em",
          fontFamily:"Orbitron, sans-serif",
          textShadow:`
            0 4px 25px hsl(var(--primary)/0.7),
            0 0 70px hsl(var(--primary)/0.5),
            0 0 140px hsl(var(--primary)/0.3)
          `
        }}
      >
        {text}
      </motion.div>

    </div>

  )
}

/* ================= MAIN INTRO ================= */

const IntroScreen = ({onComplete}:{onComplete:()=>void}) => {

  const [phase,setPhase]=useState(0)
  const [exiting,setExiting]=useState(false)

  const handleSkip = useCallback(()=>{
    if(exiting) return
    setExiting(true)
    setTimeout(onComplete,1200)
  },[onComplete,exiting])

  useEffect(()=>{

    const timers=[
      setTimeout(()=>setPhase(1),500),
      setTimeout(()=>setPhase(2),3500),
      setTimeout(()=>setPhase(3),7000),
      setTimeout(()=>{
        setExiting(true)
        setTimeout(onComplete,1200)
      },11000)
    ]

    return ()=>timers.forEach(clearTimeout)

  },[onComplete])

  return(
    <AnimatePresence>
      {!exiting && (

        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background overflow-hidden"
          exit={{opacity:0}}
          transition={{duration:1}}
        >

          <TechBackground/>
          <HackathonBands/>
          <FloatingElements/>

          <div className="relative text-center z-20 px-6 max-w-5xl space-y-10">

            {phase>=1 && (
              <MagicText
                delay={0}
                text="HACKOUTSAV 2026"
                className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-black uppercase"
              />
            )}

            {phase>=2 && (
              <MagicText
                delay={0}
                text="A National Level 24-Hour Hackathon"
                className="text-sm sm:text-xl md:text-3xl font-semibold tracking-wider"
              />
            )}

            {phase>=3 && (

              <motion.div
                initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{duration:1}}
                className="flex flex-col items-center space-y-4"
              >

                <h3 className="text-sm md:text-xl uppercase tracking-[0.35em] font-semibold text-white">
                  Organized by
                </h3>

                <p className="text-sm md:text-xl uppercase tracking-[0.35em] font-semibold text-white text-center">
                  D.Y.Patil School of Engineering & Management
                </p>

              </motion.div>

            )}

          </div>

        </motion.div>

      )}
    </AnimatePresence>
  )
}

export default IntroScreen;