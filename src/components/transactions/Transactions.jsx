import css from './transactions.module.css';
import PropTypes from 'prop-types';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHeader}>
        <tr className={css.tableHeaderRow}>
          <th className={css.tableHeadRow}>TYPE</th>
          <th className={css.tableHeadRow}>AMOUNT</th>
          <th className={css.tableHeadRow}>CURRENCY</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(item => (
          <tr className={css.tableBodyRow} key={item.id}>
            <td className={css.tableData}>{item.type}</td>
            <td className={css.tableData}>{item.amount}</td>
            <td className={css.tableData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
