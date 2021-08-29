/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
class AccountWrapperAsset extends React.Component {
  render() {
    const { balance } = this.props;

    const freeBalance = parseFloat(balance.free);
    const lockedBalance = parseFloat(balance.locked);

    return (
      <div className='account-wrapper-asset pt-2 pl-2 pr-2 pb-0'>
        <div className='account-wrapper-body'>
          <div className='account-asset-coin'>{balance.asset}</div>
          <div className='account-asset-row'>
            <span className='account-asset-label'>Total:</span>
            <span className='account-asset-value'>
              {(freeBalance + lockedBalance).toFixed(5)}
            </span>
          </div>
          <div className='account-asset-row'>
            <span className='account-asset-label'>Free:</span>
            <span className='account-asset-value'>
              {freeBalance.toFixed(5)}
            </span>
          </div>
          <div className='account-asset-row'>
            <span className='account-asset-label'>Locked:</span>
            <span className='account-asset-value'>
              {lockedBalance.toFixed(5)}
            </span>
          </div>
          <ProgressBar
            animated
            now={lockedBalance}
            max={freeBalance + lockedBalance}
            label={`${(
              (lockedBalance / (freeBalance + lockedBalance)) *
              100
            ).toFixed(0)}%`}
          />
        </div>
      </div>
    );
  }
}
