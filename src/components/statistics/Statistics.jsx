import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = props => {
  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}
      <ul className={css.statList}>
        {props.stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
