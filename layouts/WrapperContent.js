/* eslint-disable jsx-a11y/alt-text */
import {
	MenuOutlined,
	QuestionCircleOutlined,
	QuestionOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Avatar, Image, Layout, Menu, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ColorBaseEnum } from '../styles/Colors';

const { Title } = Typography;
const { Header, Footer, Sider } = Layout;

const WrapperContent = (props) => {
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(false);
	const listMenu = [
		{
			title: 'Question 1',
			nameIcon: 'QuestionOutlined',
			onClick: () => router.push('/'),
		},
		{
			title: 'Question 2',
			nameIcon: 'QuestionCircleOutlined',
			onClick: () => router.push('/questionTwo'),
		},
	];

	return (
		<Layout>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					backgroundColor: ColorBaseEnum.white,
				}}
				trigger={null}
				collapsible
				collapsed={collapsed}>
				<div className='logo'>
					<Image
						width={168 * (collapsed ? 0.3 : 0.7)}
						height={60.225 * (collapsed ? 0.3 : 0.7)}
						style={{ alignSelf: 'center' }}
						src='https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/6a94981db2154bb3c30ff4f21c080e7f.png'
					/>
				</div>
				<Menu
					theme='light'
					mode='inline'
					defaultSelectedKeys={router.route === '/' ? '1' : '2'}>
					{listMenu.map((data, index) => {
						const { title, nameIcon, onClick } = data;
						return (
							<Menu.Item
								onClick={onClick}
								key={index + 1}
								icon={
									nameIcon === 'QuestionOutlined' ? (
										<QuestionOutlined />
									) : (
										<QuestionCircleOutlined />
									)
								}>
								{title}
							</Menu.Item>
						);
					})}
				</Menu>
			</Sider>
			<Layout className='site-layout' style={{ marginLeft: 200 }}>
				<Header
					className='site-layout-background'
					style={{ padding: '0px 16px' }}>
					<div
						style={{
							justifyContent: 'space-between',
							flexDirection: 'row',
							display: 'flex',
							alignItems: 'center',
						}}>
						<MenuOutlined
							onClick={() => setCollapsed(!collapsed)}
							className='trigger'
						/>
						<Title level={5}>Web Admin Moduit</Title>
						<div>
							<Space>
								<Avatar size='default' icon={<UserOutlined />} />
							</Space>
						</div>
					</div>
				</Header>
				{props.children}
				<Footer style={{ textAlign: 'center' }}>
					<p>
						Copyright © 2021{' '}
						<span>
							<a
								href='https://www.linkedin.com/in/wahyu-fatur-rizky/'
								rel='noreferrer'
								target='_blank'>
								PT Moduit Digital Indonesia.{' '}
							</a>
						</span>
						All right reserved
					</p>
				</Footer>
			</Layout>
		</Layout>
	);
};

export default WrapperContent;
