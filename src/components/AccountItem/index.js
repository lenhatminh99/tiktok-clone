import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1596358982153217~c5_300x300.webp?x-expires=1682701200&x-signature=wxtzk9koiSFLup5UE9O%2FMuCf%2FY0%3D' alt='' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem