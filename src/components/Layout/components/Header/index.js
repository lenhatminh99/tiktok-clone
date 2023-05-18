import { useEffect, useState } from 'react';

import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia, faCircleQuestion, faKeyboard,
    faCloudUpload, faUser, faCoins, faUserCog, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button'
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss'
import images from '~/assets/images'


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese'
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese'
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut'
    }
]

function Header(){
    const [searchResult, setSearchResult] = useState([])
    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },1000)
    })

    const handleMenuItemChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faUserCog} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                            <div className={cx('search-results')}
                                 tabIndex='-1'
                                 {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type='text'
                            placeholder='Search accounts and videos'
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={200} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}
                    <Menu
                        items = {currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuItemChange}
                    >
                        {currentUser ? (
                            <img
                                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a1ea4e169cdfec741e2e1df44664c62a~c5_100x100.jpeg?x-expires=1684508400&x-signature=8%2B81e%2B%2BxzwfcuHpmyYDUzIHqG78%3D'
                                className={cx('user-avatar')} alt='nguyen van a' />
                            ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    )
}

export default Header