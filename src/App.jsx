import React, { useEffect, useState } from "react";
import { competencyCount, curriculum, generateQuestions } from "./curriculum.js";

const startingPlayers = [
  { name: "Faustine", animal: "🦊" },
  { name: "Perline", animal: "🐰" },
];
const questionCount = 5;

function readStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeProgress(saved = {}) {
  return {
    stars: Number(saved.stars) || 0,
    completed: Array.isArray(saved.completed) ? saved.completed : [],
  };
}

function App() {
  const [players, setPlayers] = useState(() => readStored("clairiere-players", startingPlayers));
  const [progress, setProgress] = useState(() => readStored("clairiere-progress", {}));
  const [player, setPlayer] = useState(null);
  const [screen, setScreen] = useState("profiles");
  const [groupId, setGroupId] = useState(curriculum[0].id);
  const [newName, setNewName] = useState("");
  const [newAnimal, setNewAnimal] = useState("🦊");
  const [lesson, setLesson] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => localStorage.setItem("clairiere-players", JSON.stringify(players)), [players]);
  useEffect(() => localStorage.setItem("clairiere-progress", JSON.stringify(progress)), [progress]);

  const activeGroup = curriculum.find((group) => group.id === groupId) || curriculum[0];
  const playerProgress = player ? normalizeProgress(progress[player.name]) : normalizeProgress();
  const activeGroupCompleted = activeGroup.skills.filter((item) => playerProgress.completed.includes(item.code)).length;

  function enterIsland(selectedPlayer) {
    setPlayer(selectedPlayer);
    setGroupId(curriculum[0].id);
    setScreen("island");
  }

  function createPlayer(event) {
    event.preventDefault();
    const name = newName.trim();
    if (!name || players.some((item) => item.name.toLowerCase() === name.toLowerCase())) return;
    const newPlayer = { name, animal: newAnimal };
    setPlayers((current) => [...current, newPlayer]);
    setNewName("");
    enterIsland(newPlayer);
  }

  function startCompetency(group, item) {
    setLesson({
      group,
      skill: item,
      questions: generateQuestions(item, questionCount),
    });
    setQuestionIndex(0);
    setAnswer("");
    setAnswered(false);
    setLastCorrect(false);
    setScore(0);
    setFinished(false);
  }

  function validateAnswer() {
    if (!answer || answered) return;
    const isCorrect = answer === lesson.questions[questionIndex].correct;
    setLastCorrect(isCorrect);
    setAnswered(true);
    if (isCorrect) setScore((current) => current + 1);
  }

  function nextQuestion() {
    if (questionIndex + 1 === questionCount) {
      const starsEarned = Math.max(score, 1);
      setProgress((current) => {
        const saved = normalizeProgress(current[player.name]);
        return {
          ...current,
          [player.name]: {
            stars: saved.stars + starsEarned,
            completed: saved.completed.includes(lesson.skill.code)
              ? saved.completed
              : [...saved.completed, lesson.skill.code],
          },
        };
      });
      setFinished(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setAnswer("");
    setAnswered(false);
    setLastCorrect(false);
  }

  function returnToProfiles() {
    setPlayer(null);
    setScreen("profiles");
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#accueil" onClick={(event) => { event.preventDefault(); player ? setScreen("island") : setScreen("profiles"); }}>
          <span className="brand-leaf">🍃</span><span>Académie de l'Île</span>
        </a>
        {player && (
          <div className="topbar-profile">
            <button className="player-pill" onClick={() => setScreen("profiles")}><span>{player.animal}</span>{player.name}</button>
            <span className="star-pill">⭐ {playerProgress.stars} étoiles</span>
          </div>
        )}
      </header>

      {screen === "profiles" ? (
        <main className="profile-screen">
          <section className="passport">
            <div className="passport-decoration deco-left">✿</div>
            <div className="passport-decoration deco-right">✧</div>
            <div className="passport-plane">🛩️</div>
            <p className="eyebrow">BIENVENUE SUR TON ÎLE</p>
            <h1>Bienvenue sur l'île !</h1>
            <p className="passport-subtitle">Choisis ton passeport ou crée un nouveau profil</p>

            {players.length > 0 && (
              <div className="saved-profiles">
                <h2><span>—</span> JOUEUSES DE L'ÎLE <span>—</span></h2>
                <div className="saved-profile-list">
                  {players.map((savedPlayer) => {
                    const savedProgress = normalizeProgress(progress[savedPlayer.name]);
                    return (
                      <button className="saved-profile" key={savedPlayer.name} onClick={() => enterIsland(savedPlayer)}>
                        <span className="saved-avatar">{savedPlayer.animal}</span>
                        <span className="saved-info"><strong>{savedPlayer.name}</strong><span>⭐ {savedProgress.stars} étoiles</span></span>
                        <span className="saved-arrow">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="profile-divider"><span>OU NOUVELLE AVENTURE</span></div>
            <form className="new-profile-form" onSubmit={createPlayer}>
              <label htmlFor="player-name">Comment tu t'appelles ?</label>
              <input id="player-name" autoComplete="off" maxLength={18} onChange={(event) => setNewName(event.target.value)} placeholder="Écris ton prénom ici…" value={newName} />
              <fieldset className="animal-picker">
                <legend>Choisis ton petit compagnon</legend>
                <div>
                  {["🦊", "🐻", "🐸", "🐰", "🐧"].map((animal) => (
                    <button aria-label={`Choisir ${animal}`} aria-pressed={newAnimal === animal} className={newAnimal === animal ? "animal-choice selected" : "animal-choice"} key={animal} onClick={() => setNewAnimal(animal)} type="button">{animal}</button>
                  ))}
                </div>
              </fieldset>
              <button className="create-button" disabled={!newName.trim() || players.some((item) => item.name.toLowerCase() === newName.trim().toLowerCase())} type="submit">Créer mon passeport <span>✦</span></button>
            </form>
          </section>
        </main>
      ) : (
        <main className="island-screen">
          <div className="journey-bar">
            <button className="change-player" onClick={returnToProfiles}>🏡 Changer de joueuse</button>
            <div className="journey-title"><span>📚</span> Parcours CE2</div>
            <div className="journey-stars">{player.animal} <strong>{player.name}</strong><span>⭐ {playerProgress.stars}</span></div>
          </div>

          <section className="island-landscape curriculum-scene" aria-label="La clairière des apprentissages">
            <div className="landscape-sky" />
            <div className="landscape-sun">☀️</div>
            <div className="landscape-cloud cloud-left">☁️</div>
            <div className="landscape-cloud cloud-right">☁️</div>
            <div className="landscape-hill hill-a" />
            <div className="landscape-hill hill-b" />
            <span className="scenery scenery-tree tree-a">🌳</span>
            <span className="scenery scenery-tree tree-b">🌲</span>
            <span className="scenery scenery-house">🏡</span>
            <span className="scenery scenery-flower flower-a">🌷</span>
            <span className="scenery scenery-flower flower-b">🌼</span>
            <div className="scene-welcome"><span>🌱</span><strong>Le sentier des savoirs</strong><span>🌱</span><small>Choisis une matière et avance à ton rythme !</small></div>
            <div className="landscape-plaque"><span>🍃</span> {competencyCount} compétences à explorer <span>🍃</span></div>
          </section>

          <section className="map-controls">
            <button className="previous-button" onClick={returnToProfiles}>← <span>Mes passeports</span></button>
            <div className="competency-count">{playerProgress.completed.length} / {competencyCount} compétences découvertes</div>
            <button className="play-button" onClick={() => startCompetency(activeGroup, activeGroup.skills.find((item) => !playerProgress.completed.includes(item.code)) || activeGroup.skills[0])}>JOUER <span>🚀</span></button>
          </section>

          <section className="competency-board">
            <div className="board-heading">
              <div>
                <p className="eyebrow">CHOISIS TON AVENTURE</p>
                <h1>{activeGroup.icon} {activeGroup.name}</h1>
                <p className="board-subtitle">5 questions pour chaque compétence · Une étoile par bonne réponse</p>
              </div>
              <div className="group-progress"><strong>{activeGroupCompleted}/{activeGroup.skills.length}</strong><span>défis réussis</span></div>
            </div>

            <nav className="domain-tabs" aria-label="Choisir une matière">
              {curriculum.map((group) => {
                const complete = group.skills.filter((item) => playerProgress.completed.includes(item.code)).length;
                return (
                  <button aria-pressed={groupId === group.id} className={`domain-tab ${group.color} ${groupId === group.id ? "selected" : ""}`} key={group.id} onClick={() => setGroupId(group.id)}>
                    <span>{group.icon}</span><span>{group.name}</span><small>{complete}/{group.skills.length}</small>
                  </button>
                );
              })}
            </nav>

            <div className="competency-grid">
              {activeGroup.skills.map((item) => {
                const complete = playerProgress.completed.includes(item.code);
                return (
                  <button className={`competency-card ${activeGroup.color} ${complete ? "complete" : ""}`} key={item.code} onClick={() => startCompetency(activeGroup, item)}>
                    <span className="skill-code">{item.code}</span>
                    <span className="skill-title">{item.title}</span>
                    <span className="skill-caption">{complete ? "Défi réussi · rejouer" : `${questionCount} petites questions`}</span>
                    <span className="skill-arrow">{complete ? "✓" : "→"}</span>
                  </button>
                );
              })}
            </div>
            <p className="board-note">✨ Pas de pression : tu peux refaire chaque défi autant de fois que tu veux.</p>
          </section>
          <footer className="island-footer">🍃 Académie de l'Île <span>·</span> Des petits pas, de grandes découvertes ♥</footer>
        </main>
      )}

      {lesson && (
        <LessonModal
          lesson={lesson}
          answer={answer}
          answered={answered}
          correct={lastCorrect}
          finished={finished}
          questionIndex={questionIndex}
          score={score}
          onAnswer={validateAnswer}
          onClose={() => setLesson(null)}
          onNext={nextQuestion}
          onSelect={setAnswer}
          player={player}
        />
      )}
    </div>
  );
}

function LessonModal({ lesson, answer, answered, correct, finished, questionIndex, score, onAnswer, onClose, onNext, onSelect, player }) {
  const currentQuestion = lesson.questions[questionIndex];
  const starsEarned = Math.max(score, 1);
  const progressPercent = ((questionIndex + (answered ? 1 : 0)) / lesson.questions.length) * 100;

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section aria-labelledby="quiz-title" aria-modal="true" className="lesson-modal" role="dialog">
        <button aria-label="Fermer" className="modal-close" onClick={onClose}>×</button>
        {finished ? (
          <div className="result-state">
            <span className="result-illustration">{score === lesson.questions.length ? "🏆" : "🌟"}</span>
            <p className="eyebrow">DÉFI TERMINÉ · {lesson.skill.code}</p>
            <h2 id="quiz-title">{score === lesson.questions.length ? "Un sans-faute !" : "Bravo, exploratrice !"}</h2>
            <p>Tu as trouvé {score} bonne{score === 1 ? " réponse" : "s"} sur {lesson.questions.length}.</p>
            <div className="earned-stars">⭐ +{starsEarned} étoiles ⭐</div>
            <button className="primary-button" onClick={onClose}>Retour au sentier</button>
          </div>
        ) : (
          <>
            <div className="modal-heading">
              <span className={`quiz-icon ${lesson.group.color}`}>{lesson.group.icon}</span>
              <div><p className="eyebrow">{lesson.skill.code} · {lesson.group.name.toUpperCase()}</p><h2 id="quiz-title">{lesson.skill.title}</h2></div>
            </div>
            <div className="quiz-progress"><span style={{ width: `${progressPercent}%` }} /></div>
            <p className="question-count">Question {questionIndex + 1} sur {lesson.questions.length} · {score} étoile{score === 1 ? "" : "s"} gagnée{score === 1 ? "" : "s"}</p>
            <h3 className="question-prompt">{currentQuestion.prompt}</h3>
            <div className="answer-list">
              {currentQuestion.answers.map((option, index) => {
                let stateClass = answer === option ? " chosen" : "";
                if (answered && option === currentQuestion.correct) stateClass = " correct";
                else if (answered && answer === option) stateClass = " incorrect";
                return <button className={`answer-option${stateClass}`} disabled={answered} key={option} onClick={() => onSelect(option)}><span className="answer-marker">{answered && option === currentQuestion.correct ? "✓" : String.fromCharCode(65 + index)}</span>{option}</button>;
              })}
            </div>
            {answered && <p className={`answer-feedback ${correct ? "good" : "try-again"}`}>{correct ? "Oui, bien joué ! ✨" : `La bonne réponse était « ${currentQuestion.correct} ». On continue !`}</p>}
            <button className="primary-button modal-action" disabled={!answer} onClick={answered ? onNext : onAnswer}>{answered ? questionIndex + 1 === lesson.questions.length ? "Voir mon résultat →" : "Question suivante →" : "Valider ma réponse"}</button>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
