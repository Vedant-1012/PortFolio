import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Brain, Code, Database, Cpu, Sparkles, Zap, Rocket, Star, Award, Target, BookOpen } from 'lucide-react'
import { personalInfo, projects as projectsData } from './data/portfolioData.js'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set())
  
  const words = ['Applied AI Engineer', 'Generative AI Developer', 'Innovator']
  
  useEffect(() => {
    const featuredProjects = projectsData.filter(project => project.featured)
    setProjects(featuredProjects)
  }, [])

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex, words])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const AnimatedParticles = () => (
    <div className="particles">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="particle" style={{
          animationDelay: `${i * 0.5}s`,
          left: `${10 + (i * 8)}%`
        }} />
      ))}
    </div>
  )

  const SkillProgress = ({ skill, level, delay = 0 }) => {
    const [progress, setProgress] = useState(0)
    const progressRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setProgress(level)
            }, delay)
          }
        },
        { threshold: 0.5 }
      )

      if (progressRef.current) {
        observer.observe(progressRef.current)
      }

      return () => observer.disconnect()
    }, [level, delay])

    return (
      <div ref={progressRef} className="skill-progress-item mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{skill}</span>
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-chart-1 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }

  const StatsCounter = ({ end, label, icon: Icon, delay = 0, suffix = '+' }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              let start = 0
              const increment = end / 50
              const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                  setCount(end)
                  clearInterval(timer)
                } else {
                  setCount(Math.floor(start))
                }
              }, 30)
            }, delay)
          }
        },
        { threshold: 0.5 }
      )

      if (countRef.current) {
        observer.observe(countRef.current)
      }

      return () => observer.disconnect()
    }, [end, delay])

    return (
      <div ref={countRef} className="text-center enhanced-card p-6 rounded-2xl">
        <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
        <div className="text-3xl font-bold animated-gradient-text">{count}{suffix}</div>
        <div className="text-muted-foreground">{label}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedParticles />
      
      <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold animated-gradient-text">{personalInfo.name}</h1>
            <div className="flex space-x-8">
              <a href="#about" className="nav-link text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="nav-link text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#skills" className="nav-link text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#contact" className="nav-link text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 hero-gradient">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="floating-element">
            <Sparkles className="w-8 h-8 text-primary absolute -top-8 -left-8 opacity-60" />
          </div>
          <div className="floating-element">
            <Zap className="w-6 h-6 text-chart-2 absolute -top-4 -right-12 opacity-60" />
          </div>
          <div className="floating-element">
            <Rocket className="w-7 h-7 text-chart-3 absolute top-8 left-16 opacity-60" />
          </div>
          
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            <span className="animated-gradient-text">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            {personalInfo.subtitle}
          </p>
          <div className="flex justify-center space-x-6">
            <Button asChild className="enhanced-button text-lg px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild className="smooth-transition text-lg px-8 py-6 border-2">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <StatsCounter end={3} label="Years of Experience" icon={Target} delay={0} suffix="+" />
            <StatsCounter end={28} label="Drop in Hallucinations" icon={Award} delay={200} suffix="%" />
            <StatsCounter end={11} label="Technologies Mastered" icon={Star} delay={400} suffix="+" />
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 gradient-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animated-gradient-text" data-animate id="about-title">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up" data-animate id="about-image">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/30 via-chart-1/30 to-chart-3/30 rounded-3xl mx-auto mb-8 flex items-center justify-center enhanced-card floating-element">
                <Brain className="w-32 h-32 text-primary" />
              </div>
            </div>
            <div className="space-y-8">
              {personalInfo.about.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-xl text-muted-foreground leading-relaxed fade-in-up ${visibleElements.has('about-title') ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animated-gradient-text" data-animate id="skills-title">Skills & Expertise</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
              <SkillProgress skill="GenAI Frameworks (LangChain, ADK, RAG)" level={90} delay={0} />
              <SkillProgress skill="Data & Databases (SQL, BigQuery, FAISS)" level={81} delay={200} />
              <SkillProgress skill="Deep Learning (PyTorch, TensorFlow, Keras)" level={83} delay={400} />
              <SkillProgress skill="Machine Learning (XGBoost, Scikit-learn)" level={91} delay={600} />
              <SkillProgress skill="Cloud Platforms (GCP, AWS)" level={85} delay={800} />
              <SkillProgress skill="MLOps & CI/CD (Docker, GitHub Actions,MLflow, CookieCutter, Hydra)" level={88} delay={1000} />
            </div>
            <div className="grid gap-8">
              {Object.entries(personalInfo.skills).map(([category, skillList], index) => (
                <Card key={category} className="enhanced-card project-card fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      {category === "Natural Language & Generative AI" && <Brain className="w-6 h-6 text-chart-1" />}
                      {category === "ML & Deep Learning" && <Database className="w-6 h-6 text-chart-2" />}
                      {category === "Cloud & MLOps" && <Code className="w-6 h-6 text-chart-3" />}
                      {category === "Tools & Frameworks" && <Cpu className="w-6 h-6 text-chart-4" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="skill-badge text-xs px-3 py-1">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORRECTED EDUCATION SECTION */}
      <section id="education" className="py-32 px-6 gradient-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animated-gradient-text">Education</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {personalInfo.education.map((edu, index) => (
              <Card key={index} className="enhanced-card project-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <BookOpen className="w-8 h-8 text-primary" />
                        {edu.university}
                      </CardTitle>
                      <CardDescription className="text-lg mt-1 ml-11">{edu.degree}</CardDescription>
                    </div>
                    <p className="text-lg text-muted-foreground pt-1">{edu.duration}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pl-16">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  {edu.researchFocus && (
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Key Research:</h4>
                      <p className="text-muted-foreground text-lg">{edu.researchFocus}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="skill-badge text-sm px-4 py-2">{course}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animated-gradient-text">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <Card key={project.id} className="enhanced-card project-card fade-in-up group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {project.name}
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" asChild className="smooth-transition hover:bg-primary/10 p-3">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" asChild className="smooth-transition hover:bg-primary/10 p-3">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="skill-badge text-sm px-3 py-1">{topic}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 gradient-section">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 animated-gradient-text">Let's Connect</h2>
          <p className="text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing AI, technology, and new opportunities.
          </p>
          <div className="flex justify-center space-x-8">
            <Button size="lg" asChild className="enhanced-button text-lg px-8 py-6">
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="smooth-transition text-lg px-8 py-6 border-2">
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="smooth-transition text-lg px-8 py-6 border-2">
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-lg">&copy; 2025 {personalInfo.name}. Built with React and passion for AI.</p>
        </div>
      </footer>
    </div>
  )
}

export default App