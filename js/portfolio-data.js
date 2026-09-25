/**
 * ============================================================================
 * RICHES THAPA — PORTFOLIO DATA CONFIGURATION
 * Edit this single file to update profile, skills, projects, contact info,
 * pipeline stages, terminal commands, and AI chatbot knowledge base.
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Riches Thapa",
    headline: "Hi, I'm Riches Thapa",
    subheadline: "DevOps Engineer | Cloud & Automation Enthusiast",
    profession: "DevOps Engineer | Cloud & Infrastructure Enthusiast | Automation Engineer",
    location: "Kathmandu, Nepal",
    supportingText: "I build, automate and maintain reliable infrastructure, deployment pipelines and cloud environments.",
    bio: "I'm Riches Thapa, a DevOps and Cloud enthusiast focused on automation, infrastructure, deployment pipelines and reliable cloud environments. Driven by a passion for scalable systems, I specialize in Infrastructure as Code with Terraform, container orchestration using Docker and Kubernetes, and building deterministic CI/CD workflows on AWS and Linux.",
    interests: [
      "DevOps",
      "Cloud Computing",
      "Infrastructure Automation",
      "CI/CD",
      "AWS",
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Networking",
      "Virtualization",
      "Infrastructure as Code"
    ],
    resumeUrl: "/resume/riches-thapa-resume.pdf"
  },

  socials: {
    github: "https://github.com/riches17atom",
    linkedin: "https://www.linkedin.com/in/riches-thapa-a38a05257/",
    emailPrimary: "richesthapa999@gmail.com",
    emailSecondary: "atomicthapa@gmail.com",
    phone: "+977 9762281647",
    phoneTel: "tel:+9779762281647",
    website: "http://richeshthapa.com.np/"
  },

  skillsCategories: [
    {
      id: "cloud",
      name: "Cloud Computing",
      icon: "☁️",
      skills: [
        { name: "AWS", description: "Core cloud platform for infrastructure hosting & services", useCase: "Cloud architecture & scalable deployments" },
        { name: "EC2", description: "Elastic Compute Cloud instances for running workloads", useCase: "Virtual server management & compute provisioning" },
        { name: "S3", description: "Simple Storage Service object storage bucket system", useCase: "Terraform remote state storage, backups, static assets" },
        { name: "IAM", description: "Identity and Access Management security policies & roles", useCase: "Least-privilege security & programmatic access control" },
        { name: "VPC", description: "Virtual Private Cloud isolated network environments", useCase: "Public/private subnet segmentation and security boundaries" },
        { name: "CloudWatch", description: "Monitoring, logging, and metrics aggregation service", useCase: "Infrastructure alerts, operational metrics, log groups" },
        { name: "Load Balancing", description: "Application Load Balancer traffic distribution across targets", useCase: "High availability, SSL termination, health checking" },
        { name: "Auto Scaling", description: "Dynamic instance scaling based on compute utilization", useCase: "High availability and workload resilience during peak traffic" },
        { name: "Route 53", description: "Highly available and scalable Cloud DNS web service", useCase: "Domain routing, health-check failover, latency routing" }
      ]
    },
    {
      id: "devops",
      name: "DevOps & CI/CD",
      icon: "🔄",
      skills: [
        { name: "CI/CD", description: "Continuous Integration & Continuous Delivery methodologies", useCase: "Automated linting, testing, and container deployment" },
        { name: "GitHub Actions", description: "YAML workflow automation directly in GitHub repositories", useCase: "Trigger automated builds, tests, and Docker pushes on git push" },
        { name: "Jenkins", description: "Open-source automation server for building and testing", useCase: "Declarative pipeline workflows and job scheduling" },
        { name: "Git", description: "Distributed version control system for tracking changes", useCase: "Branching strategies, commit history, collaboration" },
        { name: "Git Bash", description: "Bash emulation environment for Windows CLI control", useCase: "Unix command line execution and Git automation on Windows" },
        { name: "Automation", description: "Scripted pipelines and self-healing cloud routines", useCase: "Eliminating manual deployment errors and toil" },
        { name: "Infrastructure as Code", description: "Managing infrastructure declaratively through code files", useCase: "Reproducible environments, version-controlled architectures" }
      ]
    },
    {
      id: "containers",
      name: "Containers & Orchestration",
      icon: "☸️",
      skills: [
        { name: "Docker", description: "Container runtime and image packaging platform", useCase: "Standardizing application dependencies and isolated runs" },
        { name: "Kubernetes", description: "Production-grade container orchestration system", useCase: "Deploying, scaling, and managing containerized applications" },
        { name: "Minikube", description: "Local Kubernetes cluster tool for testing & learning", useCase: "Local microservice validation and testing manifest configs" },
        { name: "Helm", description: "The package manager for Kubernetes applications", useCase: "Templated Kubernetes manifests and chart versioning" },
        { name: "Containerization", description: "Encapsulating software into lightweight portable units", useCase: "Consistent environment parity between dev and production" }
      ]
    },
    {
      id: "iac",
      name: "Infrastructure as Code",
      icon: "📜",
      skills: [
        { name: "Terraform", description: "HashiCorp declarative infrastructure provisioning engine", useCase: "Automating AWS VPCs, Subnets, EC2, and S3 resources with state management" }
      ]
    },
    {
      id: "os",
      name: "Operating Systems",
      icon: "🐧",
      skills: [
        { name: "Linux", description: "Primary OS powering modern cloud servers and containers", useCase: "System administration, process management, shell tooling" },
        { name: "Ubuntu", description: "Debian-based Linux distribution widely adopted in cloud", useCase: "Server provisioning, package management (apt), daemon management" },
        { name: "Windows", description: "Desktop and server operating environment", useCase: "Developer workstation, PowerShell, WSL2 Linux subsystem" }
      ]
    },
    {
      id: "networking",
      name: "Networking",
      icon: "🌐",
      skills: [
        { name: "TCP/IP", description: "Fundamental transmission communication protocols", useCase: "Troubleshooting packet flow, ports, and socket connections" },
        { name: "DNS", description: "Domain Name System resolving hostnames to IP addresses", useCase: "Domain routing, record propagation, latency management" },
        { name: "HTTP/HTTPS", description: "Application layer transfer protocols with TLS encryption", useCase: "Web application traffic and secure SSL certificate setups" },
        { name: "Subnetting", description: "Partitioning an IP network into smaller subnet segments", useCase: "Separating public-facing and private isolated networks" },
        { name: "CIDR", description: "Classless Inter-Domain Routing notation for IP address blocks", useCase: "VPC address space allocation (e.g. 10.0.0.0/16)" },
        { name: "Routing", description: "Directing network traffic between subnets and gateways", useCase: "Route tables, Internet Gateways, NAT Gateways" },
        { name: "Firewalls", description: "Network security barrier monitoring incoming/outgoing traffic", useCase: "Protecting compute instances from unauthorized access" },
        { name: "Security Groups", description: "Virtual stateful firewall at instance/ENI level", useCase: "Inbound/outbound port rules (SSH port 22, HTTP port 80/443)" },
        { name: "VPC Networking", description: "AWS isolated private cloud networking construct", useCase: "Secure multi-tier architecture isolation" }
      ]
    },
    {
      id: "virtualization",
      name: "Virtualization",
      icon: "💻",
      skills: [
        { name: "VirtualBox", description: "Type-2 hypervisor for running virtual machines locally", useCase: "Spinning up isolated sandbox environments for Linux labs" },
        { name: "Virtual Machines", description: "Emulated hardware instances running guest operating systems", useCase: "Multi-OS testing and dedicated environment sandboxing" },
        { name: "Linux VMs", description: "Virtual instances running Linux kernels", useCase: "Local cluster nodes and server administration practice" }
      ]
    },
    {
      id: "web",
      name: "Web & Automation Skills",
      icon: "🛠️",
      skills: [
        { name: "HTML", description: "HyperText Markup Language for structuring web content", useCase: "Structuring web apps and documentation portals" },
        { name: "CSS", description: "Cascading Style Sheets for modern responsive interfaces", useCase: "Professional developer portfolios and dashboard styling" },
        { name: "JavaScript", description: "Dynamic scripting language for web and CLI tooling", useCase: "Interactive UI logic, automated frontend flows, and API calls" },
        { name: "SEO", description: "Search engine optimization and structured metadata", useCase: "Search visibility, OpenGraph, and accessible web standards" },
        { name: "Web Deployment", description: "Deploying web assets to production cloud platforms", useCase: "Static hosting, S3 buckets, edge CDN distribution" },
        { name: "Automation", description: "End-to-end task automation with shell and code", useCase: "Streamlining repetitive dev and deployment routines" }
      ]
    }
  ],

  pipelineStages: [
    { id: 1, name: "Developer", icon: "👨‍💻", desc: "Code authored locally on Linux/Windows workstation with Git." },
    { id: 2, name: "Git", icon: "📦", desc: "Changes committed locally with structured semantic commit messages." },
    { id: 3, name: "GitHub", icon: "🐙", desc: "Remote repository receives commits, triggering automated Webhooks." },
    { id: 4, name: "Build", icon: "⚙️", desc: "GitHub Actions runner triggers build jobs and compiles dependencies." },
    { id: 5, name: "Test", icon: "🧪", desc: "Automated linting and unit test suites executed to ensure code quality." },
    { id: 6, name: "Docker", icon: "🐳", desc: "Multi-stage Dockerfile builds a secure, minimal container image." },
    { id: 7, name: "Container Registry", icon: "🗄️", desc: "Docker image tagged with commit SHA and pushed to registry." },
    { id: 8, name: "Terraform", icon: "📜", desc: "Terraform checks and provisions prerequisite cloud infrastructure." },
    { id: 9, name: "AWS", icon: "☁️", desc: "AWS VPC, Load Balancer, and compute nodes receive updated workload." },
    { id: 10, name: "Kubernetes", icon: "☸️", desc: "Kube cluster applies rolling update to pods with zero downtime." },
    { id: 11, name: "Production", icon: "🚀", desc: "Live application serving traffic with real-time health checks active." }
  ],

  projects: [
    {
      id: "practice",
      name: "practice-",
      category: ["DevOps", "Automation", "Infrastructure", "All"],
      description: "Hands-on DevOps learning repository containing practical experiments with Docker containerization, shell scripting automation, and Linux configuration exercises.",
      tech: ["Linux", "Docker", "Bash", "Git"],
      github: "https://github.com/riches17atom/practice-",
      featured: true
    },
    {
      id: "project_magmt",
      name: "project_magmt",
      category: ["Web", "Automation", "All"],
      description: "Project management and team collaboration workflow tool designed to organize deliverables, track task states, and explore agile software pipelines.",
      tech: ["JavaScript", "HTML", "CSS", "Git"],
      github: "https://github.com/riches17atom/project_magmt",
      featured: true
    },
    {
      id: "Kanban-Thunder",
      name: "Kanban-Thunder",
      category: ["Web", "DevOps", "All"],
      description: "Interactive visual Kanban board productivity application enabling dynamic column workflows, drag-and-drop state management, and modern responsive task tracking.",
      tech: ["JavaScript", "CSS", "HTML", "Web Deployment"],
      github: "https://github.com/riches17atom/Kanban-Thunder",
      featured: true
    }
  ],

  terminalPresets: [
    {
      cmd: "kubectl get nodes",
      output: `NAME        STATUS   ROLES           AGE   VERSION
node-01     Ready    control-plane   32d   v1.28.2
node-02     Ready    worker          32d   v1.28.2
node-03     Ready    worker          32d   v1.28.2`
    },
    {
      cmd: "kubectl get pods -A",
      output: `NAMESPACE     NAME                             READY   STATUS    RESTARTS   AGE
kube-system   coredns-5dd5756b68-8s2kx         1/1     Running   0          32d
kube-system   kube-proxy-8f921                 1/1     Running   0          32d
production    web-app-deployment-64d84f-7j8qx  1/1     Running   0          14d
production    api-service-89cbb77-m89lp        1/1     Running   0          14d`
    },
    {
      cmd: "docker ps",
      output: `CONTAINER ID   IMAGE                 COMMAND                  CREATED        STATUS        PORTS                  NAMES
c3f189a01b22   nginx:alpine          "/docker-entrypoint.…"   2 hours ago    Up 2 hours    0.0.0.0:80->80/tcp     web-proxy
a99b4412ef01   node:20-alpine        "docker-entrypoint.s…"   2 hours ago    Up 2 hours    0.0.0.0:3000->3000/tcp api-backend`
    },
    {
      cmd: "terraform plan",
      output: `Terraform used the selected providers to generate the following execution plan.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:
  # aws_vpc.main will be created
  + resource "aws_vpc" "main" {
      + cidr_block           = "10.0.0.0/16"
      + enable_dns_hostnames = true
      + enable_dns_support   = true
      + tags                 = { "Name" = "production-vpc", "ManagedBy" = "Terraform" }
    }

Plan: 1 to add, 0 to change, 0 to destroy.`
    },
    {
      cmd: "git status",
      output: `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
	modified:   terraform/main.tf
	modified:   k8s/deployment.yaml

no changes added to commit (use "git add" to track)`
    },
    {
      cmd: "aws ec2 describe-instances",
      output: `{
    "Reservations": [
        {
            "Instances": [
                {
                    "InstanceId": "i-0987a12bc45ef6789",
                    "InstanceType": "t3.medium",
                    "State": { "Code": 16, "Name": "running" },
                    "PrivateIpAddress": "10.0.1.45",
                    "VpcId": "vpc-0a1b2c3d4e5f67890"
                }
            ]
        }
    ]
}`
    }
  ],

  chatbotKnowledge: [
    {
      keywords: ["who", "riches", "about", "bio", "background", "introduce"],
      response: "Riches Thapa is a DevOps and Cloud enthusiast based in Kathmandu, Nepal. He focuses on infrastructure automation, reliable cloud environments, CI/CD deployment pipelines, Docker, Kubernetes, Terraform, and AWS.",
      actionTarget: "#about"
    },
    {
      keywords: ["specialize", "skills", "tools", "technology", "stack", "know"],
      response: "Riches specializes in Cloud & Infrastructure Automation. His core toolkit includes AWS (EC2, S3, VPC, IAM, Route 53), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, Linux (Ubuntu), and Network Engineering.",
      actionTarget: "#skills"
    },
    {
      keywords: ["k8s", "kubernetes", "cluster", "pods", "minikube"],
      response: "Riches works with Kubernetes for container orchestration, including clusters with control planes and worker nodes, Pods, Deployments, Services, Helm charts, and Minikube for local development. Let me show you his Kubernetes cluster architecture.",
      actionTarget: "#kubernetes"
    },
    {
      keywords: ["aws", "cloud", "ec2", "s3", "vpc", "route 53"],
      response: "In AWS, Riches focuses on VPC networking, public/private subnets, EC2 instances, S3 storage, IAM least-privilege security, CloudWatch monitoring, and Load Balancing. Taking you to the interactive AWS Cloud section now.",
      actionTarget: "#aws"
    },
    {
      keywords: ["pipeline", "cicd", "deploy", "build", "github actions", "jenkins"],
      response: "Riches implements automated CI/CD pipelines connecting code authoring with Git/GitHub through automated testing, Docker container builds, Terraform IaC, and Kubernetes zero-downtime rollouts.",
      actionTarget: "#pipeline"
    },
    {
      keywords: ["terraform", "iac", "infrastructure as code"],
      response: "Riches uses Terraform for declarative Infrastructure as Code: authoring .tf files, running 'terraform init', 'terraform plan', and 'terraform apply' to provision AWS VPCs, subnets, and compute resources.",
      actionTarget: "#terraform"
    },
    {
      keywords: ["project", "projects", "repo", "github", "repositories", "work"],
      response: "Riches's public repositories on GitHub include 'practice-' (DevOps experiments & Docker labs), 'project_magmt' (workflow management), and 'Kanban-Thunder' (dynamic task boards).",
      actionTarget: "#projects"
    },
    {
      keywords: ["terminal", "lab", "commands", "kubectl", "cli"],
      response: "Riches built an interactive DevOps Lab right on this website where you can simulate real commands like 'kubectl get nodes', 'docker ps', and 'terraform plan'. Let's open the DevOps Lab.",
      actionTarget: "#lab"
    },
    {
      keywords: ["contact", "email", "phone", "hire", "reach", "message", "call"],
      response: "You can reach Riches via email at richesthapa999@gmail.com (secondary: atomicthapa@gmail.com), by phone at +977 9762281647, or through LinkedIn and GitHub. Taking you to the Contact section.",
      actionTarget: "#contact"
    },
    {
      keywords: ["resume", "cv", "download"],
      response: "You can download Riches Thapa's resume using the 'Download Resume' button at the top or in the Hero section.",
      actionTarget: "#hero"
    }
  ]
};

// Export to window object for browser accessibility
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
