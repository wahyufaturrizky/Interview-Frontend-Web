import { Input, Layout, Row, Table, Tag, Typography } from 'antd';
import moment from 'moment';
import Head from 'next/head';
import React, { useState } from 'react';
import WrapperContent from '../layouts/WrapperContent';
import { MarginEnum, PaddingEnum } from '../styles/Spacer';

const { Content } = Layout;
const { Title } = Typography;

export default function QuestionTwo() {
	let dataMock = [
		{
			id: 952401,
			category: 8,
			title: 'Intelligent Concrete Gloves',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Licensed',
			createdAt: '2021-11-08T10:33:57.7468396+00:00',
		},
		{
			id: 4284,
			title: 'Refined Fresh Mouse',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Gorgeous',
			tags: ['Toys', 'Music', 'Clothing', 'Home', 'Music'],
			createdAt: '2021-11-07T15:26:13.6638177+00:00',
		},
		{
			id: 120050,
			category: 6,
			title: 'Intelligent Steel Gloves',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Licensed',
		},
		{
			id: 952744,
			category: 10,
			title: 'Incredible Fresh Ball',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Awesome',
			tags: ['Kids', 'Music', 'Clothing', 'Shoes', 'Movies'],
		},
		{
			id: 326979,
			category: 9,
			title: 'Handcrafted Soft Gloves',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Handcrafted',
			tags: ['Garden', 'Garden', 'Kids', 'Toys', 'Music'],
			createdAt: '2021-11-07T19:09:01.0302519+00:00',
		},
		{
			id: 140702,
			category: 1,
			title: 'Practical Plastic Bacon',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Awesome',
			tags: ['Electronics', 'Garden', 'Baby', 'Outdoors', 'Movies'],
		},
		{
			id: 568511,
			category: 3,
			title: 'Unbranded Rubber Cheese',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Handcrafted',
			tags: ['Grocery', 'Baby', 'Automotive', 'Tools', 'Industrial'],
		},
		{
			id: 469103,
			category: 8,
			title: 'Gorgeous Rubber Tuna',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Generic',
			tags: ['Kids', 'Electronics', 'Movies', 'Clothing', 'Books'],
			createdAt: '2021-11-08T06:39:14.6349548+00:00',
		},
		{
			id: 896760,
			category: 2,
			title: 'Practical Frozen Mouse',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Unbranded',
			tags: ['Electronics', 'Music', 'Tools', 'Outdoors', 'Toys'],
			createdAt: '2021-11-07T21:45:00.2588244+00:00',
		},
		{
			id: 733093,
			category: 1,
			title: 'Handcrafted Cotton Bacon',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Licensed',
			tags: ['Games', 'Jewelery', 'Music', 'Games', 'Toys'],
			createdAt: '2021-11-08T05:45:42.3626742+00:00',
		},
		{
			id: 484423,
			category: 10,
			title: 'Fantastic Granite Hat',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Fantastic',
			tags: ['Music', 'Music', 'Health', 'Books', 'Computers'],
			createdAt: '2021-11-08T05:54:20.1350897+00:00',
		},
		{
			id: 650692,
			title: 'Gorgeous Frozen Pants',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Fantastic',
			tags: ['Tools', 'Books', 'Books', 'Electronics', 'Shoes'],
			createdAt: '2021-11-07T13:28:45.4298688+00:00',
		},
		{
			id: 875438,
			category: 4,
			title: 'Unbranded Cotton Mouse',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Small',
		},
		{
			id: 589629,
			title: 'Rustic Granite Gloves',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Refined',
			tags: ['Books', 'Garden', 'Music', 'Tools', 'Garden'],
		},
		{
			id: 225236,
			category: 8,
			title: 'Licensed Wooden Gloves',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Small',
			tags: ['Outdoors', 'Baby', 'Clothing', 'Shoes', 'Clothing'],
			createdAt: '2021-11-07T14:52:10.3580897+00:00',
		},
		{
			id: 320255,
			title: 'Handmade Rubber Soap',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Awesome',
			tags: ['Music', 'Computers', 'Electronics', 'Jewelery', 'Outdoors'],
			createdAt: '2021-11-07T11:40:54.4930392+00:00',
		},
		{
			id: 27345,
			category: 9,
			title: 'Awesome Fresh Shoes',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Practical',
			createdAt: '2021-11-08T00:44:05.4968068+00:00',
		},
		{
			id: 520961,
			category: 7,
			title: 'Licensed Steel Soap',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Intelligent',
			tags: ['Clothing', 'Music', 'Electronics', 'Electronics', 'Sports'],
			createdAt: '2021-11-07T17:19:03.1129306+00:00',
		},
		{
			id: 674353,
			category: 5,
			title: 'Licensed Soft Keyboard',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Fantastic',
		},
		{
			id: 844742,
			category: 8,
			title: 'Sleek Plastic Computer',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Fantastic',
			tags: ['Sports', 'Electronics', 'Shoes', 'Sports', 'Electronics'],
			createdAt: '2021-11-07T16:48:20.7643797+00:00',
		},
		{
			id: 140860,
			title: 'Sleek Concrete Gloves',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Gorgeous',
			createdAt: '2021-11-07T23:42:36.9286723+00:00',
		},
		{
			id: 203594,
			category: 1,
			title: 'Intelligent Cotton Gloves',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Generic',
			tags: ['Books', 'Outdoors', 'Home', 'Home', 'Kids'],
			createdAt: '2021-11-07T18:08:16.75343+00:00',
		},
		{
			id: 301947,
			category: 7,
			title: 'Unbranded Cotton Chicken',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Awesome',
			tags: ['Garden', 'Games', 'Shoes', 'Clothing', 'Clothing'],
			createdAt: '2021-11-07T13:12:58.2587888+00:00',
		},
		{
			id: 718544,
			category: 7,
			title: 'Intelligent Rubber Chair',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Practical',
			tags: ['Grocery', 'Automotive', 'Home', 'Health', 'Industrial'],
			createdAt: '2021-11-07T21:53:18.0141184+00:00',
		},
		{
			id: 469569,
			category: 7,
			title: 'Gorgeous Soft Car',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Licensed',
			tags: ['Toys', 'Jewelery', 'Industrial', 'Toys', 'Sports'],
			createdAt: '2021-11-07T20:21:46.1058306+00:00',
		},
		{
			id: 985351,
			category: 2,
			title: 'Awesome Rubber Shirt',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Handcrafted',
			createdAt: '2021-11-07T21:01:37.91596+00:00',
		},
		{
			id: 593022,
			category: 2,
			title: 'Small Concrete Shirt',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Refined',
		},
		{
			id: 318615,
			category: 8,
			title: 'Unbranded Granite Table',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Rustic',
			tags: ['Games', 'Automotive', 'Sports', 'Clothing', 'Beauty'],
			createdAt: '2021-11-08T02:07:18.0590319+00:00',
		},
		{
			id: 225250,
			title: 'Sleek Frozen Pizza',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Intelligent',
			tags: ['Grocery', 'Baby', 'Jewelery', 'Industrial', 'Computers'],
		},
		{
			id: 256749,
			category: 3,
			title: 'Rustic Metal Pants',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Rustic',
			tags: ['Computers', 'Health', 'Computers', 'Industrial', 'Books'],
		},
		{
			id: 613122,
			title: 'Small Concrete Chair',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Refined',
			tags: ['Health', 'Garden', 'Books', 'Kids', 'Garden'],
			createdAt: '2021-11-07T22:30:17.7852752+00:00',
		},
		{
			id: 572107,
			title: 'Licensed Granite Pants',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Small',
			tags: ['Home', 'Health', 'Kids', 'Toys', 'Automotive'],
		},
		{
			id: 205524,
			category: 9,
			title: 'Licensed Cotton Mouse',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Incredible',
			tags: ['Movies', 'Toys', 'Sports', 'Garden', 'Music'],
			createdAt: '2021-11-08T07:58:53.2909068+00:00',
		},
		{
			id: 961891,
			category: 2,
			title: 'Refined Cotton Bike',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Ergonomic',
			tags: ['Garden', 'Movies', 'Shoes', 'Clothing', 'Computers'],
		},
		{
			id: 251542,
			category: 9,
			title: 'Small Cotton Towels',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Incredible',
			tags: ['Outdoors', 'Books', 'Home', 'Home', 'Electronics'],
			createdAt: '2021-11-08T10:57:12.236558+00:00',
		},
		{
			id: 375315,
			title: 'Rustic Rubber Car',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Refined',
			createdAt: '2021-11-08T06:30:18.6235573+00:00',
		},
		{
			id: 384036,
			category: 1,
			title: 'Licensed Steel Computer',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Awesome',
			tags: ['Books', 'Electronics', 'Garden', 'Outdoors', 'Jewelery'],
			createdAt: '2021-11-08T01:33:34.3918235+00:00',
		},
		{
			id: 86520,
			category: 1,
			title: 'Small Plastic Computer',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Rustic',
			tags: ['Outdoors', 'Home', 'Outdoors', 'Toys', 'Grocery'],
			createdAt: '2021-11-07T19:55:02.3246063+00:00',
		},
		{
			id: 853835,
			category: 6,
			title: 'Handcrafted Frozen Shirt',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Unbranded',
			createdAt: '2021-11-08T02:29:53.2219941+00:00',
		},
		{
			id: 409236,
			category: 8,
			title: 'Unbranded Cotton Towels',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Ergonomic',
			tags: ['Shoes', 'Clothing', 'Electronics', 'Outdoors', 'Baby'],
			createdAt: '2021-11-08T06:04:15.4107839+00:00',
		},
		{
			id: 561257,
			title: 'Generic Steel Computer',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Tasty',
			createdAt: '2021-11-07T15:26:08.5717391+00:00',
		},
		{
			id: 932982,
			category: 9,
			title: 'Ergonomic Wooden Hat',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Ergonomic',
			tags: ['Automotive', 'Baby', 'Baby', 'Kids', 'Clothing'],
			createdAt: '2021-11-08T08:06:43.5431442+00:00',
		},
		{
			id: 767001,
			category: 10,
			title: 'Fantastic Plastic Sausages',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Gorgeous',
			tags: ['Home', 'Electronics', 'Movies', 'Tools', 'Books'],
			createdAt: '2021-11-08T06:37:17.0165089+00:00',
		},
		{
			id: 885003,
			category: 7,
			title: 'Sleek Frozen Soap',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Handcrafted',
			createdAt: '2021-11-07T23:44:44.222221+00:00',
		},
		{
			id: 389552,
			category: 6,
			title: 'Sleek Wooden Chicken',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Refined',
			tags: ['Music', 'Shoes', 'Computers', 'Jewelery', 'Books'],
		},
		{
			id: 489629,
			title: 'Ergonomic Soft Bike',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Sleek',
			tags: ['Shoes', 'Jewelery', 'Games', 'Automotive', 'Music'],
		},
		{
			id: 736113,
			title: 'Intelligent Frozen Shoes',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Sleek',
			tags: ['Industrial', 'Computers', 'Beauty', 'Toys', 'Grocery'],
			createdAt: '2021-11-07T23:30:07.3545404+00:00',
		},
		{
			id: 472171,
			category: 2,
			title: 'Ergonomic Soft Ball',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Gorgeous',
			tags: ['Computers', 'Books', 'Automotive', 'Music', 'Clothing'],
			createdAt: '2021-11-07T21:12:15.1815489+00:00',
		},
		{
			id: 673088,
			category: 4,
			title: 'Unbranded Steel Bacon',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Gorgeous',
			tags: ['Tools', 'Clothing', 'Computers', 'Grocery', 'Industrial'],
			createdAt: '2021-11-07T19:35:38.6810693+00:00',
		},
		{
			id: 305983,
			category: 1,
			title: 'Licensed Cotton Chair',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Licensed',
			tags: ['Movies', 'Music', 'Computers', 'Clothing', 'Toys'],
			createdAt: '2021-11-08T03:41:30.4033583+00:00',
		},
		{
			id: 693400,
			title: 'Rustic Fresh Hat',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Handcrafted',
			tags: ['Clothing', 'Shoes', 'Sports', 'Beauty', 'Books'],
			createdAt: '2021-11-07T13:13:19.8563121+00:00',
		},
		{
			id: 393363,
			category: 4,
			title: 'Small Fresh Salad',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Awesome',
			tags: ['Automotive', 'Toys', 'Jewelery', 'Garden', 'Books'],
			createdAt: '2021-11-08T01:32:38.7319699+00:00',
		},
		{
			id: 418565,
			category: 1,
			title: 'Refined Soft Pizza',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Rustic',
			tags: ['Automotive', 'Computers', 'Garden', 'Computers', 'Industrial'],
			createdAt: '2021-11-07T23:59:21.6951838+00:00',
		},
		{
			id: 191943,
			title: 'Handcrafted Plastic Towels',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Fantastic',
			tags: ['Shoes', 'Books', 'Kids', 'Computers', 'Outdoors'],
		},
		{
			id: 356042,
			category: 8,
			title: 'Tasty Wooden Mouse',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Small',
			createdAt: '2021-11-07T13:34:18.8301633+00:00',
		},
		{
			id: 113003,
			title: 'Practical Wooden Pants',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Refined',
			tags: ['Toys', 'Kids', 'Music', 'Jewelery', 'Beauty'],
			createdAt: '2021-11-07T16:18:29.9874441+00:00',
		},
		{
			id: 115424,
			title: 'Gorgeous Fresh Chips',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Gorgeous',
			tags: ['Industrial', 'Books', 'Kids', 'Toys', 'Tools'],
			createdAt: '2021-11-07T11:52:05.7114398+00:00',
		},
		{
			id: 129383,
			category: 7,
			title: 'Rustic Wooden Table',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Licensed',
			tags: ['Sports', 'Music', 'Kids', 'Garden', 'Outdoors'],
		},
		{
			id: 388373,
			category: 1,
			title: 'Generic Soft Salad',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Unbranded',
			tags: ['Books', 'Books', 'Garden', 'Home', 'Electronics'],
		},
		{
			id: 630447,
			category: 10,
			title: 'Awesome Metal Shirt',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Incredible',
		},
		{
			id: 321224,
			category: 4,
			title: 'Sleek Wooden Cheese',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Small',
			tags: ['Movies', 'Home', 'Grocery', 'Tools', 'Health'],
		},
		{
			id: 474895,
			title: 'Fantastic Metal Pants',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Incredible',
			tags: ['Baby', 'Health', 'Garden', 'Outdoors', 'Jewelery'],
			createdAt: '2021-11-08T06:36:54.9920335+00:00',
		},
		{
			id: 763430,
			category: 7,
			title: 'Gorgeous Frozen Chicken',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Refined',
			tags: ['Electronics', 'Health', 'Home', 'Grocery', 'Outdoors'],
		},
		{
			id: 54692,
			category: 9,
			title: 'Unbranded Soft Ball',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Unbranded',
			tags: ['Music', 'Music', 'Music', 'Games', 'Clothing'],
		},
		{
			id: 101831,
			category: 9,
			title: 'Sleek Rubber Mouse',
			description:
				'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
			footer: 'Generic',
			tags: ['Jewelery', 'Games', 'Games', 'Shoes', 'Books'],
		},
		{
			id: 607422,
			category: 7,
			title: 'Rustic Fresh Salad',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Unbranded',
			tags: ['Tools', 'Books', 'Kids', 'Garden', 'Shoes'],
			createdAt: '2021-11-07T14:16:18.8372191+00:00',
		},
		{
			id: 31665,
			category: 8,
			title: 'Small Plastic Shirt',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Generic',
		},
		{
			id: 910452,
			title: 'Ergonomic Rubber Soap',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Awesome',
			tags: ['Outdoors', 'Shoes', 'Sports', 'Tools', 'Books'],
			createdAt: '2021-11-07T14:11:12.5040328+00:00',
		},
		{
			id: 275654,
			category: 1,
			title: 'Fantastic Metal Chips',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Licensed',
			tags: ['Garden', 'Tools', 'Jewelery', 'Outdoors', 'Grocery'],
		},
		{
			id: 71260,
			category: 2,
			title: 'Practical Cotton Tuna',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Gorgeous',
			tags: ['Sports', 'Music', 'Beauty', 'Home', 'Jewelery'],
			createdAt: '2021-11-08T00:27:53.7131871+00:00',
		},
		{
			id: 300323,
			title: 'Rustic Frozen Gloves',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Tasty',
			tags: ['Movies', 'Toys', 'Computers', 'Computers', 'Shoes'],
			createdAt: '2021-11-07T16:26:02.2062289+00:00',
		},
		{
			id: 579941,
			title: 'Generic Plastic Towels',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Intelligent',
			tags: ['Home', 'Computers', 'Games', 'Beauty', 'Home'],
			createdAt: '2021-11-08T07:11:47.2421594+00:00',
		},
		{
			id: 942160,
			title: 'Intelligent Rubber Ball',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Refined',
			tags: ['Automotive', 'Home', 'Kids', 'Home', 'Books'],
			createdAt: '2021-11-07T17:45:40.5037234+00:00',
		},
		{
			id: 361388,
			title: 'Small Metal Mouse',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Refined',
			createdAt: '2021-11-07T15:43:21.7191349+00:00',
		},
		{
			id: 425900,
			category: 10,
			title: 'Incredible Plastic Towels',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Sleek',
			createdAt: '2021-11-07T11:09:29.1634085+00:00',
		},
		{
			id: 519750,
			title: 'Generic Wooden Ball',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Tasty',
			tags: ['Baby', 'Health', 'Toys', 'Toys', 'Jewelery'],
			createdAt: '2021-11-08T03:22:40.1694793+00:00',
		},
		{
			id: 511294,
			category: 9,
			title: 'Incredible Fresh Chicken',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Rustic',
			tags: ['Books', 'Automotive', 'Tools', 'Outdoors', 'Computers'],
			createdAt: '2021-11-07T23:00:53.334135+00:00',
		},
		{
			id: 929801,
			category: 3,
			title: 'Generic Metal Mouse',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Sleek',
			tags: ['Health', 'Computers', 'Outdoors', 'Computers', 'Automotive'],
		},
		{
			id: 883930,
			category: 9,
			title: 'Handcrafted Concrete Gloves',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Incredible',
			tags: ['Jewelery', 'Home', 'Computers', 'Music', 'Toys'],
			createdAt: '2021-11-07T15:01:33.8541208+00:00',
		},
		{
			id: 990367,
			category: 1,
			title: 'Tasty Rubber Mouse',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Ergonomic',
			tags: ['Books', 'Grocery', 'Computers', 'Garden', 'Home'],
			createdAt: '2021-11-07T12:10:45.9332445+00:00',
		},
		{
			id: 997653,
			category: 4,
			title: 'Intelligent Frozen Towels',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Intelligent',
			createdAt: '2021-11-07T12:56:03.8085962+00:00',
		},
		{
			id: 404841,
			category: 3,
			title: 'Tasty Concrete Sausages',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Handmade',
			tags: ['Kids', 'Computers', 'Computers', 'Jewelery', 'Movies'],
		},
		{
			id: 326923,
			category: 4,
			title: 'Generic Wooden Pants',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Gorgeous',
			tags: ['Baby', 'Industrial', 'Grocery', 'Kids', 'Clothing'],
			createdAt: '2021-11-07T18:10:03.0409343+00:00',
		},
		{
			id: 501710,
			category: 9,
			title: 'Handmade Frozen Pants',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Small',
			tags: [
				'Automotive',
				'Electronics',
				'Automotive',
				'Computers',
				'Automotive',
			],
		},
		{
			id: 257770,
			title: 'Intelligent Concrete Tuna',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Awesome',
			tags: ['Toys', 'Grocery', 'Home', 'Jewelery', 'Garden'],
		},
		{
			id: 559961,
			category: 10,
			title: 'Fantastic Plastic Gloves',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Handmade',
		},
		{
			id: 428167,
			category: 9,
			title: 'Intelligent Plastic Hat',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Small',
		},
		{
			id: 130417,
			category: 7,
			title: 'Licensed Metal Towels',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Gorgeous',
			tags: ['Home', 'Automotive', 'Sports', 'Games', 'Music'],
			createdAt: '2021-11-07T16:46:43.0613161+00:00',
		},
		{
			id: 585695,
			category: 9,
			title: 'Intelligent Cotton Computer',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Awesome',
			createdAt: '2021-11-07T21:19:50.2717827+00:00',
		},
		{
			id: 958874,
			title: 'Rustic Metal Towels',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Incredible',
			tags: ['Toys', 'Sports', 'Electronics', 'Home', 'Electronics'],
			createdAt: '2021-11-07T15:18:24.2615843+00:00',
		},
		{
			id: 46829,
			category: 10,
			title: 'Incredible Plastic Towels',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Licensed',
			tags: ['Outdoors', 'Electronics', 'Books', 'Outdoors', 'Computers'],
		},
		{
			id: 384542,
			category: 1,
			title: 'Tasty Concrete Sausages',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Intelligent',
			tags: ['Home', 'Electronics', 'Beauty', 'Health', 'Garden'],
			createdAt: '2021-11-08T04:05:52.5326759+00:00',
		},
		{
			id: 547537,
			title: 'Practical Soft Tuna',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Small',
			createdAt: '2021-11-07T13:33:48.6591134+00:00',
		},
		{
			id: 254458,
			category: 6,
			title: 'Tasty Fresh Bike',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Refined',
			tags: ['Home', 'Books', 'Computers', 'Grocery', 'Computers'],
		},
		{
			id: 906282,
			category: 5,
			title: 'Rustic Plastic Pizza',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Unbranded',
			tags: ['Jewelery', 'Movies', 'Shoes', 'Automotive', 'Beauty'],
			createdAt: '2021-11-07T11:44:37.7669974+00:00',
		},
		{
			id: 327228,
			category: 5,
			title: 'Licensed Concrete Pants',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Small',
			tags: ['Outdoors', 'Outdoors', 'Garden', 'Shoes', 'Jewelery'],
			createdAt: '2021-11-07T12:47:04.1575913+00:00',
		},
		{
			id: 911156,
			category: 7,
			title: 'Fantastic Plastic Keyboard',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Small',
			tags: ['Beauty', 'Beauty', 'Grocery', 'Grocery', 'Music'],
			createdAt: '2021-11-08T02:30:32.8716829+00:00',
		},
		{
			id: 40105,
			category: 6,
			title: 'Unbranded Steel Table',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Refined',
			tags: ['Shoes', 'Baby', 'Industrial', 'Electronics', 'Toys'],
		},
		{
			id: 121697,
			category: 7,
			title: 'Tasty Steel Computer',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Licensed',
			tags: ['Music', 'Outdoors', 'Sports', 'Electronics', 'Kids'],
		},
		{
			id: 539435,
			title: 'Refined Soft Pizza',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Sleek',
			tags: ['Sports', 'Health', 'Tools', 'Movies', 'Movies'],
			createdAt: '2021-11-07T16:43:02.1045121+00:00',
		},
		{
			id: 942448,
			category: 1,
			title: 'Practical Plastic Keyboard',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Gorgeous',
			tags: ['Home', 'Jewelery', 'Garden', 'Garden', 'Books'],
			createdAt: '2021-11-08T05:14:53.3616867+00:00',
		},
		{
			id: 90278,
			category: 3,
			title: 'Handmade Metal Fish',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Handmade',
			tags: ['Grocery', 'Automotive', 'Computers', 'Books', 'Grocery'],
			createdAt: '2021-11-08T05:33:52.9906778+00:00',
		},
		{
			id: 142465,
			category: 7,
			title: 'Tasty Concrete Mouse',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Fantastic',
			createdAt: '2021-11-08T09:10:40.5382428+00:00',
		},
		{
			id: 231358,
			category: 9,
			title: 'Handcrafted Frozen Pants',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Small',
			createdAt: '2021-11-07T15:38:42.1694543+00:00',
		},
		{
			id: 573607,
			category: 1,
			title: 'Handmade Concrete Car',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Small',
			tags: ['Books', 'Garden', 'Outdoors', 'Grocery', 'Games'],
		},
		{
			id: 874699,
			title: 'Licensed Soft Cheese',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Unbranded',
			createdAt: '2021-11-08T03:29:38.1044077+00:00',
		},
		{
			id: 702554,
			title: 'Refined Plastic Table',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Small',
			tags: ['Kids', 'Computers', 'Home', 'Health', 'Games'],
			createdAt: '2021-11-08T09:33:34.3589479+00:00',
		},
		{
			id: 121097,
			category: 1,
			title: 'Practical Soft Mouse',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Small',
			tags: ['Automotive', 'Movies', 'Industrial', 'Movies', 'Books'],
			createdAt: '2021-11-08T10:16:27.6680329+00:00',
		},
		{
			id: 39801,
			category: 3,
			title: 'Ergonomic Soft Gloves',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Ergonomic',
			createdAt: '2021-11-07T12:14:03.7482179+00:00',
		},
		{
			id: 973842,
			category: 6,
			title: 'Incredible Frozen Bike',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Ergonomic',
			createdAt: '2021-11-08T06:49:14.0992322+00:00',
		},
		{
			id: 227126,
			title: 'Incredible Granite Car',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Handmade',
			tags: ['Computers', 'Outdoors', 'Jewelery', 'Baby', 'Automotive'],
			createdAt: '2021-11-08T08:39:47.9260272+00:00',
		},
		{
			id: 136876,
			category: 7,
			title: 'Fantastic Wooden Chicken',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Licensed',
		},
		{
			id: 424733,
			category: 10,
			title: 'Practical Wooden Ball',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Refined',
			tags: ['Kids', 'Automotive', 'Industrial', 'Tools', 'Garden'],
		},
		{
			id: 553196,
			category: 7,
			title: 'Refined Soft Chicken',
			description:
				'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
			footer: 'Sleek',
			createdAt: '2021-11-08T00:10:15.0163862+00:00',
		},
		{
			id: 107254,
			category: 9,
			title: 'Handcrafted Concrete Shoes',
			description:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
			footer: 'Licensed',
			createdAt: '2021-11-07T20:21:26.1978739+00:00',
		},
		{
			id: 360029,
			category: 10,
			title: 'Sleek Fresh Fish',
			description:
				'The Football Is Good For Training And Recreational Purposes',
			footer: 'Ergonomic',
			tags: ['Jewelery', 'Shoes', 'Kids', 'Home', 'Home'],
			createdAt: '2021-11-08T10:23:31.7142381+00:00',
		},
		{
			id: 471762,
			category: 5,
			title: 'Small Plastic Chicken',
			description:
				"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
			footer: 'Gorgeous',
			tags: ['Movies', 'Beauty', 'Computers', 'Home', 'Tools'],
			createdAt: '2021-11-07T21:24:55.6924975+00:00',
		},
		{
			id: 915183,
			category: 5,
			title: 'Tasty Concrete Chicken',
			description:
				'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
			footer: 'Handmade',
			tags: ['Clothing', 'Home', 'Baby', 'Outdoors', 'Electronics'],
		},
		{
			id: 863929,
			title: 'Handmade Rubber Bacon',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Unbranded',
			tags: ['Music', 'Music', 'Baby', 'Industrial', 'Outdoors'],
		},
		{
			id: 164384,
			category: 10,
			title: 'Gorgeous Cotton Gloves',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Incredible',
			tags: ['Kids', 'Home', 'Industrial', 'Grocery', 'Toys'],
			createdAt: '2021-11-07T21:53:37.7923724+00:00',
		},
		{
			id: 552478,
			category: 4,
			title: 'Ergonomic Cotton Chicken',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			footer: 'Handmade',
			tags: ['Music', 'Games', 'Toys', 'Home', 'Movies'],
			createdAt: '2021-11-08T08:19:58.1341639+00:00',
		},
		{
			id: 731796,
			category: 1,
			title: 'Sleek Metal Sausages',
			description:
				'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
			footer: 'Handcrafted',
			tags: ['Jewelery', 'Outdoors', 'Electronics', 'Baby', 'Automotive'],
			createdAt: '2021-11-07T22:52:33.7819422+00:00',
		},
		{
			id: 578953,
			category: 3,
			title: 'Ergonomic Cotton Cheese',
			description:
				'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
			footer: 'Refined',
			tags: ['Outdoors', 'Grocery', 'Electronics', 'Automotive', 'Jewelery'],
		},
		{
			id: 192173,
			category: 5,
			title: 'Tasty Metal Computer',
			description:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
			footer: 'Generic',
			tags: ['Books', 'Outdoors', 'Outdoors', 'Music', 'Toys'],
			createdAt: '2021-11-08T10:00:25.9761684+00:00',
		},
		{
			id: 651712,
			category: 8,
			title: 'Small Metal Chips',
			description:
				'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
			footer: 'Incredible',
		},
		{
			id: 200546,
			category: 7,
			title: 'Ergonomic Granite Sausages',
			description:
				'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			footer: 'Fantastic',
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
				<title>Moduit - Question 2</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<WrapperContent>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<Title level={4}>Question 2</Title>
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
