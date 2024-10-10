import styles from './app.module.css';
import data from './data.json';
import {useState} from "react";

export const App = () => {
	const [activeStep, setActiveStep] = useState(0);

	const stepForward = () => {
		activeStep < data.length - 1 ? setActiveStep(activeStep + 1) : null;
	}
	const stepBack = () => {
		activeStep > 0 ? setActiveStep(activeStep - 1) : null;
	}
	const startOver = () => {
		setActiveStep(0);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента используйте steps и activeIndex */
							data[activeStep].content
						}
					</div>
					<ul className={styles['steps-list']}>
						{
							data.map((step, id) => (
								<li className={activeStep === id || activeStep> id ? styles['steps-item'] +
									' ' +
									styles.done +
									' ' +
									styles.active : styles['steps-item'] +
									' ' +
									styles.done} key={id}>
									<button className={styles['steps-item-button']} onClick={() => setActiveStep(id)}>{id + 1}</button>
									{/* При клике на кнопку установка выбранного шага в качестве активного */}
									{step.title}
								</li>
							))
						}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} disabled={activeStep === 0} onClick={stepBack}>Назад</button>
						<button className={styles.button} onClick={() => activeStep === data.length - 1 ? startOver() : stepForward()}>
							{activeStep === data.length - 1 ? 'Начать сначала'  : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
