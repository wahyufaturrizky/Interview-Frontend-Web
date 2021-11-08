import { Input, Layout, Row, Table, Tag, Typography } from 'antd';
import moment from 'moment';
import Head from 'next/head';
import React, { useState } from 'react';
import WrapperContent from '../layouts/WrapperContent';
import { MarginEnum, PaddingEnum } from '../styles/Spacer';

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
	let dataMock = [
		{
			id: 395422,
			category: 7,
			title: 'Refined Plastic Pizza',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Generic',
		},
		{
			id: 226497,
			category: 2,
			title: 'Rustic Fresh Tuna',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Gorgeous',
			tags: ['Health', 'Industrial', 'Movies', 'Music', 'Kids'],
			createdAt: '2021-11-07T19:30:19.1091011+00:00',
		},
		{
			id: 137004,
			category: 9,
			title: 'Sleek Cotton Mouse',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Licensed',
			tags: ['Health', 'Music', 'Industrial', 'Movies', 'Health'],
			createdAt: '2021-11-07T16:13:35.3985965+00:00',
		},
		{
			id: 10119,
			title: 'Intelligent Cotton Pizza',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Refined',
			tags: ['Clothing', 'Sports', 'Tools', 'Outdoors', 'Beauty'],
		},
		{
			id: 757134,
			category: 7,
			title: 'Incredible Soft Fish',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Handmade',
			createdAt: '2021-11-07T09:13:23.3881784+00:00',
		},
		{
			id: 308649,
			category: 1,
			title: 'Generic Steel Table',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Handcrafted',
			tags: ['Sports', 'Home', 'Beauty', 'Beauty', 'Grocery'],
			createdAt: '2021-11-07T23:47:43.8475373+00:00',
		},
		{
			id: 198644,
			category: 9,
			title: 'Unbranded Plastic Keyboard',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Tasty',
			createdAt: '2021-11-07T11:34:42.7134472+00:00',
		},
		{
			id: 871769,
			title: 'Sleek Rubber Sausages',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Sleek',
			createdAt: '2021-11-07T09:33:41.115743+00:00',
		},
		{
			id: 593266,
			category: 1,
			title: 'Intelligent Cotton Pants',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Refined',
			createdAt: '2021-11-07T17:49:02.8219433+00:00',
		},
		{
			id: 426284,
			category: 5,
			title: 'Unbranded Metal Sausages',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Practical',
			tags: ['Sports', 'Computers', 'Jewelery', 'Garden', 'Movies'],
			createdAt: '2021-11-08T07:59:07.4513783+00:00',
		},
		{
			id: 64108,
			title: 'Intelligent Concrete Shoes',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Sleek',
		},
		{
			id: 856591,
			title: 'Ergonomic Fresh Gloves',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Small',
			tags: ['Clothing', 'Clothing', 'Beauty', 'Toys', 'Books'],
		},
		{
			id: 799086,
			category: 3,
			title: 'Sleek Fresh Salad',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Rustic',
			tags: ['Games', 'Kids', 'Grocery', 'Music', 'Electronics'],
			createdAt: '2021-11-08T05:00:09.3831145+00:00',
		},
		{
			id: 297453,
			title: 'Handcrafted Granite Chair',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Handmade',
			createdAt: '2021-11-08T08:26:26.8904035+00:00',
		},
		{
			id: 991885,
			category: 2,
			title: 'Small Fresh Computer',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Small',
			tags: ['Jewelery', 'Industrial', 'Games', 'Outdoors', 'Kids'],
			createdAt: '2021-11-07T09:18:34.8645154+00:00',
		},
		{
			id: 574621,
			title: 'Licensed Plastic Gloves',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Gorgeous',
			tags: ['Toys', 'Outdoors', 'Baby', 'Outdoors', 'Garden'],
			createdAt: '2021-11-07T11:11:36.0315674+00:00',
		},
		{
			id: 598807,
			category: 6,
			title: 'Awesome Wooden Mouse',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Ergonomic',
			createdAt: '2021-11-07T22:35:55.8745919+00:00',
		},
		{
			id: 92159,
			category: 8,
			title: 'Unbranded Concrete Bike',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Handcrafted',
			createdAt: '2021-11-07T23:29:21.035047+00:00',
		},
		{
			id: 104999,
			category: 9,
			title: 'Intelligent Plastic Car',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Licensed',
			tags: ['Computers', 'Books', 'Jewelery', 'Tools', 'Books'],
			createdAt: '2021-11-07T20:48:42.4640355+00:00',
		},
		{
			id: 458448,
			category: 1,
			title: 'Gorgeous Soft Table',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Handcrafted',
		},
		{
			id: 392787,
			category: 7,
			title: 'Unbranded Granite Shirt',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Fantastic',
			tags: ['Books', 'Shoes', 'Automotive', 'Outdoors', 'Outdoors'],
			createdAt: '2021-11-07T14:35:57.5714573+00:00',
		},
		{
			id: 269138,
			category: 2,
			title: 'Tasty Fresh Computer',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Unbranded',
			tags: ['Games', 'Tools', 'Electronics', 'Tools', 'Music'],
		},
		{
			id: 140954,
			title: 'Sleek Frozen Computer',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Ergonomic',
			createdAt: '2021-11-08T08:25:57.5520484+00:00',
		},
		{
			id: 607770,
			category: 9,
			title: 'Rustic Frozen Towels',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Licensed',
			createdAt: '2021-11-08T04:13:40.4879856+00:00',
		},
		{
			id: 789635,
			title: 'Unbranded Soft Shirt',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Generic',
			tags: ['Electronics', 'Shoes', 'Grocery', 'Automotive', 'Beauty'],
		},
		{
			id: 359941,
			category: 8,
			title: 'Handmade Soft Chips',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Fantastic',
			tags: ['Baby', 'Beauty', 'Tools', 'Computers', 'Outdoors'],
			createdAt: '2021-11-07T10:27:43.377344+00:00',
		},
		{
			id: 331001,
			category: 2,
			title: 'Tasty Metal Pizza',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Generic',
			tags: ['Automotive', 'Jewelery', 'Garden', 'Toys', 'Garden'],
		},
		{
			id: 423514,
			category: 8,
			title: 'Intelligent Steel Table',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Intelligent',
			tags: ['Games', 'Tools', 'Shoes', 'Sports', 'Computers'],
			createdAt: '2021-11-08T01:43:25.6935876+00:00',
		},
		{
			id: 847844,
			category: 7,
			title: 'Tasty Rubber Towels',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Refined',
			createdAt: '2021-11-08T07:53:49.7047854+00:00',
		},
		{
			id: 596502,
			title: 'Incredible Fresh Chicken',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Practical',
		},
		{
			id: 523478,
			category: 10,
			title: 'Sleek Metal Pants',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Fantastic',
			tags: ['Beauty', 'Computers', 'Outdoors', 'Kids', 'Electronics'],
		},
		{
			id: 367108,
			category: 5,
			title: 'Small Concrete Sausages',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Generic',
			tags: ['Industrial', 'Health', 'Garden', 'Jewelery', 'Games'],
			createdAt: '2021-11-07T10:34:35.2115432+00:00',
		},
		{
			id: 124365,
			category: 5,
			title: 'Tasty Plastic Towels',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Handcrafted',
			tags: ['Garden', 'Computers', 'Games', 'Movies', 'Kids'],
		},
		{
			id: 938477,
			category: 10,
			title: 'Generic Rubber Pizza',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Handmade',
			createdAt: '2021-11-07T22:46:32.5433146+00:00',
		},
		{
			id: 345794,
			category: 7,
			title: 'Awesome Granite Bike',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Handmade',
			tags: ['Toys', 'Books', 'Kids', 'Jewelery', 'Grocery'],
			createdAt: '2021-11-07T13:56:43.8820958+00:00',
		},
		{
			id: 557766,
			category: 4,
			title: 'Rustic Fresh Hat',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Ergonomic',
			tags: ['Books', 'Tools', 'Toys', 'Movies', 'Home'],
		},
		{
			id: 851401,
			title: 'Fantastic Soft Car',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Handmade',
			createdAt: '2021-11-07T20:49:12.2929337+00:00',
		},
		{
			id: 566835,
			category: 7,
			title: 'Refined Concrete Salad',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Refined',
			tags: ['Computers', 'Music', 'Electronics', 'Computers', 'Games'],
			createdAt: '2021-11-07T22:54:38.1434141+00:00',
		},
	];
	const [dataList, setDataList] = useState(dataMock);
	const [isLoading, setIsLoading] = useState(false);

	const columnsTable = [
		{
			title: 'No',
			dataIndex: 'id',
			key: 'id',
			render: (text, rowData, index) => <p>{index + 1}</p>,
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			render: (text) => <p>{text || 'N/A'}</p>,
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (text) => <p>{text}</p>,
		},
		{
			title: 'Desc.',
			dataIndex: 'description',
			key: 'description',
			render: (text) => <p>{text}</p>,
		},
		{
			title: 'Footer',
			dataIndex: 'footer',
			key: 'footer',
			render: (text) => <p>{text}</p>,
		},
		{
			title: 'Tags',
			dataIndex: 'tags',
			key: 'tags',
			render: (tags) => (
				<>
					{tags
						? tags.map((tag, index) => {
								return (
									<Tag color={'geekblue'} key={index}>
										{tag.toUpperCase()}
									</Tag>
								);
						  })
						: 'N/A'}
				</>
			),
		},
		{
			title: 'Created At',
			dataIndex: 'createdAt',
			key: 'createdAt',
			render: (text) => <p>{moment(text).format('YYYY-MM-DD')}</p>,
		},
	];

	const onSearch = (data) => {
		if (data === '') {
			setDataList(dataMock);
		} else {
			let tempData = dataList.filter(
				(filtering) => filtering.title.toLowerCase() === data.toLowerCase()
			);

			setDataListMasterSpec(tempData);
		}
	};
	return (
		<>
			<Head>
				<title>Moduit - Question 1</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<WrapperContent>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<Title level={4}>Question 1</Title>
					<div
						className='site-layout-background'
						style={{ padding: PaddingEnum['5x'] }}>
						<Row
							justify='end'
							style={{
								marginBottom: MarginEnum['2x'],
								marginTop: MarginEnum['2x'],
							}}>
							<Input.Search
								placeholder='must enter the full title for question one'
								onSearch={onSearch}
								allowClear
								oncle
								style={{ width: '40%' }}
							/>
						</Row>
						<Table
							size='small'
							loading={isLoading}
							bordered
							rowClassName={(record, index) => {
								if (index % 2 === 1) {
									return 'color-gray-2';
								} else {
									return 'color-gray-1';
								}
							}}
							columns={columnsTable}
							dataSource={dataList}
							scroll={{ x: 1900 }}
						/>
					</div>
				</Content>
			</WrapperContent>
		</>
	);
}
