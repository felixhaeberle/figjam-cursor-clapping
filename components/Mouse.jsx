import styles from '../styles/Mouse.module.css'

export default function Mouse({position}) {
  return (
    <div className={styles.mouse} style={{position: "fixed", top: position.y + 'px', left: position.x + 'px', }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.292.049a.5.5 0 01.535.077L12.86 7.95a.5.5 0 01-.306.878l-3.334.147 1.931 4.244a.5.5 0 01-.247.662l-2.153.98a.5.5 0 01-.662-.247L6.153 10.37l-2.29 2.416A.5.5 0 013 12.44V.504a.5.5 0 01.292-.455zM4 1.599v9.589l1.938-2.044a.5.5 0 01.818.137l2.035 4.463 1.242-.566-2.031-4.463a.5.5 0 01.433-.707l2.82-.124L4 1.599z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  )
}