import React, { useState } from "react";

const data = {
  name: "SHIN HA YEON 신하연 ",
  role: "Backend Developer",
  intro: [
    "PHP/Laravel 기반으로 4년간 파견 인재 관리 플랫폼의 백엔드를 담당하며,\n비즈니스 문제를 해결하는 기능을 설계·구현하고 그 가치를 데이터로 증명해 왔습니다.",
    "외부 API 비용 구조를 개선하는 처리 방식 재설계, 비동기 처리·캐시 전략을 통한\n성능 최적화, 반복 작업을 없애는 공통 모듈화 등\n현실적 제약 속에서 최적의 구조를 만들어내는 데 강점이 있으며,\n배포 후에는 직접 쿼리와 로그를 분석해 실제 임팩트를 검증합니다.",
    "Laravel 실무 경험을 토대로 Java/Spring, Node.js(NestJS)로 기술 스택을 넓혀,\n동시성 제어와 테스트 전략을 적용한 API 서버를 구현했습니다.",
  ],
  github: "https://github.com/yeonhashin",
  email: "carbeau@naver.com",
  phone: "010.9404.8699",
  resumeLink: "/my-portfolio/resume.pdf",
  experience: [
    {
      company: "WDB 주식회사 (일본)",
      role: "Backend Developer · PHP / Laravel",
      period: "2022.05 — 2026.05",
      desc: "자사 서비스 백엔드 유지보수 및 신규 기능 설계·개발",
    },
  ],
  projects: [
    {
      title: "공동구매 커머스 플랫폼",
      desc: "Spring Boot + React 기반 공동구매 커머스. 도메인 모듈 설계, 공동구매 상태 머신, Redis Lua Script 동시성 제어, Spring Event 기반 알림 분리를 구현했습니다.",
      tags: ["Spring Boot", "Java", "Redis", "MySQL", "React"],
      link: "https://www.notion.so/Project-Group-Purchase-38d4b597e029803f987ed287d1f47c08?source=copy_link",
    },
    {
      title: "NestJS REST API 서버",
      desc: "NestJS 기반 SNS형 REST API 서버. 모듈·계층 구조 설계, JWT 인증·인가, Pessimistic Lock 동시성 제어, Jest 테스트 환경을 구축했습니다.",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Jest"],
      link: "https://www.notion.so/Project-NestJS-API-Server-3184b597e029801993dbdcd58ca03071?source=copy_link",
    },
  ],
  skills: [
    {
      label: "Backend",
      items: ["PHP / Laravel", "JavaScript", "Java / Spring Boot", "NestJS / Node.js"],
    },
    {
      label: "Database",
      items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "Redis"],
    },
    {
      label: "Infra / Test",
      items: ["Docker", "Git", "JUnit5 / Jest", "JaCoCo"],
    },
  ],
};

const styles = {
  root: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "#fff",
    color: "#111",
    minHeight: "100vh",
  },
  inner: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "0 2rem 6rem",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.75rem 0",
    borderBottom: "1px solid #e8e8e8",
    marginBottom: "3.5rem",
  },
  navName: {
    fontSize: 15,
    fontWeight: 500,
    color: "#111",
    letterSpacing: "-0.01em",
  },
  navLinks: {
    display: "flex",
    gap: "0.5rem",
  },
  // 내비 링크: 클릭 영역을 글자에 딱 맞추되 상하 패딩으로 살짝만 여유. 위치 이동 없음.
  navLink: {
    fontSize: 13,
    color: "#888",
    textDecoration: "none",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: 6,
    transition: "color 0.18s ease, background 0.18s ease, transform 0.1s ease",
    userSelect: "none",
    display: "inline-block",
  },
  hero: {
    marginBottom: "4rem",
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#888",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "0.75rem",
  },
  heroH1: {
    fontSize: 36,
    fontWeight: 500,
    color: "#111",
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    marginBottom: "1.25rem",
  },
  heroP: {
    fontSize: 15,
    color: "#555",
    lineHeight: 1.75,
    maxWidth: 640,
    marginBottom: "0.9rem",
    whiteSpace: "pre-line",
  },
  heroPWrap: {
    marginBottom: "1.75rem",
  },
  heroLinks: {
    display: "flex",
    gap: "0.625rem",
  },
  // 버튼: inline-flex + width fit-content 로 클릭 영역이 정확히 버튼 크기만큼만.
  btnFilled: {
    fontSize: 13,
    padding: "9px 18px",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#111",
    color: "#fff",
    background: "#111",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    width: "fit-content",
    transition: "transform 0.15s ease, background 0.18s ease, opacity 0.18s ease",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
  },
  btnOutline: {
    fontSize: 13,
    padding: "9px 18px",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    color: "#111",
    background: "transparent",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    width: "fit-content",
    transition: "transform 0.15s ease, border-color 0.18s ease, background 0.18s ease",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
  },
  section: {
    marginBottom: "3.5rem",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 500,
    color: "#aaa",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "1.25rem",
  },
  sectionLabelSub: {
    color: "#888",
    fontWeight: 500,
  },
  expItem: {
    padding: "1.25rem 0",
    borderTop: "1px solid #f0f0f0",
  },
  expItemLast: {
    padding: "1.25rem 0",
    borderTop: "1px solid #f0f0f0",
    borderBottom: "1px solid #f0f0f0",
  },
  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "0.3rem",
  },
  expCompany: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111",
  },
  expDate: {
    fontSize: 12,
    color: "#aaa",
  },
  expRole: {
    fontSize: 13,
    color: "#777",
    marginBottom: "0.3rem",
  },
  expDesc: {
    fontSize: 13,
    color: "#999",
    lineHeight: 1.6,
  },
  projectCard: {
    background: "#fafafa",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderRadius: 12,
    padding: "1.25rem",
    marginBottom: "0.75rem",
    outline: "none",
    transition: "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  },
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "0.5rem",
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111",
  },
  // 상세보기 링크: 클릭 영역을 글자 + 약간의 패딩으로 한정.
  projectLink: {
    fontSize: 12,
    color: "#555",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "3px 6px",
    marginRight: -6,
    borderRadius: 6,
    cursor: "pointer",
    transition: "color 0.18s ease, background 0.18s ease, transform 0.1s ease",
    userSelect: "none",
    WebkitUserSelect: "none",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
  },
  projectDesc: {
    fontSize: 13,
    color: "#666",
    lineHeight: 1.65,
    marginBottom: "0.875rem",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    fontSize: 11,
    color: "#777",
    background: "#fff",
    border: "1px solid #e8e8e8",
    padding: "3px 9px",
    borderRadius: 6,
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  },
  skillGroupTitle: {
    fontSize: 12,
    fontWeight: 500,
    color: "#888",
    marginBottom: "0.5rem",
  },
  skillList: {
    fontSize: 13,
    color: "#555",
    lineHeight: 1.9,
  },
  contactRow: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  // 연락처 링크: 클릭 영역을 콘텐츠에 맞춤.
  contactItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    fontSize: 13,
    color: "#555",
    textDecoration: "none",
    padding: "5px 8px",
    borderRadius: 6,
    cursor: "pointer",
    transition: "color 0.18s ease, background 0.18s ease, transform 0.1s ease",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
  },
  // ===== 주요 업무 (아코디언) =====
  workIntro: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.7,
    maxWidth: 520,
    marginBottom: "1.25rem",
  },
};

// 인라인 스타일 환경에서 :hover / :active 를 못 쓰므로 마우스/포커스 이벤트로 상태 관리.
// 중요한 점: 사용자가 넘긴 onClick 등은 그대로 살리고, 내부 핸들러와 "병합"해서 전달한다.
function Pressable({
  as: Tag = "a",
  baseStyle,
  hoverStyle = {},
  pressStyle = {},
  children,
  onClick,
  onKeyDown,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const composed = {
    outline: "none", // 클릭 시 브라우저 기본 검은/파란 외곽선 제거
    ...baseStyle,
    ...(hovered ? hoverStyle : {}),
    ...(pressed ? pressStyle : {}),
  };

  return (
    <Tag
      {...props}
      draggable={false}
      style={composed}
      onClick={(e) => {
        // 클릭 후 링크에 포커스가 남아 아웃라인(검은 테두리)이 보이는 것을 방지
        if (e.currentTarget && typeof e.currentTarget.blur === "function") {
          e.currentTarget.blur();
        }
        if (onClick) onClick(e);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onBlur={() => {
        setPressed(false);
        setHovered(false);
      }}
    >
      {children}
    </Tag>
  );
}

// "2022.05 — 2026.05" 같은 기간 문자열에서 시작·종료 연월을 뽑아 총 경력(년)을 계산.
// 여러 경력이 있으면 개월수를 합산한 뒤 년으로 환산한다.
function getTotalYears(experience) {
  const parse = (s) => {
    // 숫자만 뽑아서 [연, 월] 형태로. 예: "2022.05" -> [2022, 5]
    const nums = s.match(/\d+/g);
    if (!nums || nums.length < 2) return null;
    return [parseInt(nums[0], 10), parseInt(nums[1], 10)];
  };

  let totalMonths = 0;
  experience.forEach((e) => {
    const parts = e.period.split(/[—\-~]/); // — 또는 - 또는 ~ 로 분리
    if (parts.length < 2) return;
    const start = parse(parts[0]);
    const end = parse(parts[1]);
    if (!start || !end) return;
    totalMonths += (end[0] - start[0]) * 12 + (end[1] - start[1]);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years > 0 && months > 0) return `${years}년 ${months}개월`;
  if (years > 0) return `${years}년`;
  return `${months}개월`;
}

export default function Portfolio() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const totalYears = getTotalYears(data.experience);

  return (
    <div style={styles.root}>
      <div style={styles.inner}>
        <nav style={styles.nav}>
          <span style={styles.navName}>{data.name}</span>
          <div style={styles.navLinks}>
            {["experience", "work", "projects", "contact"].map((id) => (
              <Pressable
                as="button"
                type="button"
                key={id}
                baseStyle={{ ...styles.navLink, border: "none", outline: "none", background: "transparent", fontFamily: "inherit" }}
                hoverStyle={{ color: "#111", background: "#f4f4f4" }}
                pressStyle={{ color: "#111", background: "#ececec", transform: "scale(0.96)" }}
                onClick={() => scrollTo(id)}
              >
                {id === "experience"
                  ? "경력"
                  : id === "work"
                  ? "주요 업무"
                  : id === "projects"
                  ? "프로젝트"
                  : "연락처"}
              </Pressable>
            ))}
          </div>
        </nav>

        <div style={styles.hero}>
          <div style={styles.heroLabel}>{data.role}</div>
          <h1 style={styles.heroH1}>
            비즈니스 관점에서 설계하는<br />백엔드 개발자
          </h1>
          <div style={styles.heroPWrap}>
            {data.intro.map((para, i) => (
              <p key={i} style={styles.heroP}>{para}</p>
            ))}
          </div>
          <div style={styles.heroLinks}>
            <Pressable
              as="a"
              href={data.github}
              target="_blank"
              rel="noreferrer"
              baseStyle={styles.btnFilled}
              hoverStyle={{ background: "#000" }}
              pressStyle={{ background: "#000", transform: "scale(0.97)", opacity: 0.9 }}
            >
              ↗ GitHub
            </Pressable>
            <Pressable
              as="a"
              href={`mailto:${data.email}`}
              baseStyle={styles.btnOutline}
              hoverStyle={{ borderColor: "#bbb", background: "#fafafa" }}
              pressStyle={{ borderColor: "#bbb", background: "#f2f2f2", transform: "scale(0.97)" }}
            >
              이메일
            </Pressable>
          </div>
        </div>

        <section id="experience" style={styles.section}>
          <div style={styles.sectionLabel}>
            경력 <span style={styles.sectionLabelSub}>· {totalYears}</span>
          </div>
          {data.experience.map((e, i) => (
            <div
              key={i}
              style={i === data.experience.length - 1 ? styles.expItemLast : styles.expItem}
            >
              <div style={styles.expHeader}>
                <span style={styles.expCompany}>{e.company}</span>
                <span style={styles.expDate}>{e.period}</span>
              </div>
              <div style={styles.expRole}>{e.role}</div>
              <div style={styles.expDesc}>{e.desc}</div>
            </div>
          ))}
        </section>

        <section id="work" style={styles.section}>
          <div style={styles.sectionLabel}>주요 업무</div>
          <p style={styles.workIntro}>
            WDB 주식회사 재직 중 수행한 실무 프로젝트 8건의 상세 내용(역할·성과·기술적 의사결정)을 별도 문서로 정리했습니다.
          </p>
          <Pressable
            as="a"
            href={data.resumeLink}
            target="_blank"
            rel="noreferrer"
            baseStyle={styles.btnOutline}
            hoverStyle={{ borderColor: "#bbb", background: "#fafafa" }}
            pressStyle={{ borderColor: "#bbb", background: "#f2f2f2", transform: "scale(0.97)" }}
          >
            경력기술서 상세 보기 ↗
          </Pressable>
        </section>

        <section id="projects" style={styles.section}>
          <div style={styles.sectionLabel}>프로젝트</div>
          {data.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </section>

        <section style={styles.section}>
          <div style={styles.sectionLabel}>기술 스택</div>
          <div style={styles.skillsGrid}>
            {data.skills.map((s) => (
              <div key={s.label}>
                <div style={styles.skillGroupTitle}>{s.label}</div>
                <div style={styles.skillList}>
                  {s.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.sectionLabel}>연락처</div>
          <div style={styles.contactRow}>
            <Pressable
              as="a"
              href={`mailto:${data.email}`}
              baseStyle={styles.contactItem}
              hoverStyle={{ color: "#111", background: "#f4f4f4" }}
              pressStyle={{ color: "#111", background: "#ececec", transform: "scale(0.97)" }}
            >
              ✉ {data.email}
            </Pressable>
            <Pressable
              as="a"
              href={data.github}
              target="_blank"
              rel="noreferrer"
              baseStyle={styles.contactItem}
              hoverStyle={{ color: "#111", background: "#f4f4f4" }}
              pressStyle={{ color: "#111", background: "#ececec", transform: "scale(0.97)" }}
            >
              ↗ GitHub
            </Pressable>
            <span style={{ ...styles.contactItem, cursor: "default" }}>☎ {data.phone}</span>
          </div>
        </section>
      </div>
    </div>
  );
}

// 프로젝트 카드: 호버 시 배경만 아주 살짝 변하고, 내부 "상세보기"만 눌림 반응.
function ProjectCard({ project: p }) {
  const [cardHover, setCardHover] = useState(false);

  const cardStyle = {
    ...styles.projectCard,
    ...(cardHover
      ? {
          background: "#f6f6f6",
          borderColor: "#e6e6e6",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        }
      : {}),
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <div style={styles.projectHeader}>
        <span style={styles.projectTitle}>{p.title}</span>
        <Pressable
          as="a"
          href={p.link}
          target="_blank"
          rel="noreferrer"
          baseStyle={styles.projectLink}
          hoverStyle={{ color: "#111", background: "#eee" }}
          pressStyle={{ color: "#111", background: "#e4e4e4", transform: "scale(0.96)" }}
        >
          상세보기 ↗
        </Pressable>
      </div>
      <p style={styles.projectDesc}>{p.desc}</p>
      <div style={styles.tags}>
        {p.tags.map((t) => (
          <span key={t} style={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}
