import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import SwitchButtonAdmin from '../components/SwitchButtonAdmin.jsx';
import apiUrl from '../../api'

import companies_action from '../redux/actions/companies.js'
import authors_action from '../redux/actions/authors.js'

const { get_companies } = companies_action
const { get_authors } = authors_action

export default function PanelAdmin() {
    let dispatch = useDispatch()

    let store = useSelector(store => store);

    let activeAuthors = store.authors.active
    let inactiveAuthors = store.authors.inactive
    let authors = (inactiveAuthors ?? []).concat(activeAuthors ?? [])

    let activeCompanies = store.companies.active
    let inactiveCompanies = store.companies.inactive
    let companies = (inactiveCompanies ?? []).concat(activeCompanies ?? [])

    console.log(store)

    useEffect(() => {
        if (!authors.length || !companies.length) {
            dispatch(get_companies());
            dispatch(get_authors());
        }
    }, []);

    const Companies = () =>
        <div className="flex flex-col h-auto w-full">
            <div className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2 ">
                <table className="w-full flex flex-row justify-center">
                    <tbody className="w-full">
                        {companies.map((company) => (
                            <tr key={company._id} className="flex flex-wrap justify-evenly gap-3 w-full sm:w-full sm:flex sm:flex-row sm:justify-between">
                                <td className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="w-6 h-6 fill-black">
                                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                    </svg>
                                    <p>{company.name}</p>
                                </td>
                                <td>
                                    <p className="w-full sm:w-auto sm:inline-block text-center">{company.website}</p>
                                </td>
                                <td>
                                    <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src={company.logo} alt="" />
                                </td>
                                <td>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <SwitchButtonAdmin
                                            company={company}
                                            url={`${apiUrl}auth/role/company/`}
                                            params={company._id}
                                            activeSection={activeSection} />
                                    </label>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    const Authors = () => {
        return (
            <div className="flex flex-col h-auto w-full">
                <div className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2">
                    <table className="w-full">
                        <tbody>
                            {authors.map((author) => (
                                <tr
                                    key={author._id}
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b"
                                >
                                    <td className="flex items-center">
                                        <svg
                                            className="h-6 w-6 fill-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <p className="pl-2">{author.name}</p>
                                    </td>
                                    <td className="py-2 sm:py-0">
                                        <p className="">{moment(author.createdAt).format("DD/MM/YYYY")}</p>
                                    </td>
                                    <td className="py-2 sm:py-0">
                                        <p className="">{author.city}</p>
                                    </td>
                                    <td className="py-2 sm:py-0">
                                        <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src={author.photo} alt="" />
                                    </td>
                                    <td className="py-2 sm:py-0">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <SwitchButtonAdmin
                                                author={author}
                                                url={`${apiUrl}auth/role/author/`}
                                                params={author._id}
                                                activeSection={activeSection}
                                            />
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };


    const [activeSection, setActiveSection] = useState('companies');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    let currentSection;
    if (activeSection === 'authors') {
        currentSection = <Authors />;
    } else if (activeSection === 'companies') {
        currentSection = <Companies />;
    }

    return (
        <div className="text-white min-h-auto w-full flex flex-col items-center">
            <img
                src="/public/images/bg-panel-admin.png"
                alt="background panel admin"
                className="w-full h-4/5 object-cover object-top"
            />
            <div className="flex justify-center">
                <p className="absolute top-[20%] font-montserrat font-semibold text-6xl">
                    Panel
                </p>
            </div>
            <div className="w-[90%] bg-slate-400 text-black flex justify-center items-center absolute top-[80%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-2xl">
                <div className="w-full">
                    <p className="font-montserrat font-bold text-2xl leading-10 text-center my-12">
                        <span className="border-b-4 border-black">Entities</span>
                    </p>
                    <div className="flex justify-center flex-col items-center mb-12">
                        <nav className="flex justify-center w-full radius-top-4">
                            <button
                                onClick={() => handleSectionChange('companies')}
                                className={`w-[40%] rounded-tl-2xl py-2 ${activeSection === 'companies' ? 'bg-black text-white' : 'bg-slate-200'}`}
                            >
                                Companies
                            </button>
                            <button
                                onClick={() => handleSectionChange('authors')}
                                className={`w-[40%] rounded-tr-2xl py-2 ${activeSection === 'authors' ? 'bg-black text-white' : 'bg-slate-200'}`}
                            >
                                Authors
                            </button>
                        </nav>
                        <div className="w-[80%] flex justify-center items-center bg-slate-200">
                            {currentSection}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
