import React from "react";
import useDateStore from "../stores/dateStore";

export default function DateOptGroups() {

    const days = useDateStore((state) => state.days);
    let months = useDateStore((state) => state.months);
    let years = useDateStore((state) => state.years);

    return (
            <div className="seller__date-search">
                <div className="seller__date-optgroup1">
                    <span className="seller__date-from">C</span>
                    <select className="date-select">
                        <optgroup label="День" className="seller__day">
                            {
                                days.map((data, i)=>{ 

                                    return (

                                        <option 
                                            key={i} 
                                            defaultValue={data.value} 
                                            className="seller__date-value">{data.day}</option>
                                        
                                    )
                                })
                            }
                        </optgroup>
                    </select>

                    <select className="date-select">
                        <optgroup label="Месяц" className="seller__month">
                            {
                                months.map((data, i)=>{ 

                                    return (

                                        <option 
                                            key={i} 
                                            defaultValue={data.value} 
                                            className="seller__date-value">{data.month}</option>
                                        
                                    )
                                })
                            }
                        </optgroup>
                    </select>

                    <select className="date-select">
                        <optgroup label="День" className="seller__year">
                        {
                                years.map((data, i)=>{ 

                                    return (

                                        <option 
                                            key={i} 
                                            defaultValue={data.value} 
                                            className="seller__date-value">{data.year}</option>
                                        
                                    )
                                })
                            }
                        </optgroup>  
                    </select>
                </div>

                <div className="seller__date-optgroup2">
                <span className="seller__date-to">По</span>
                    <select className="date-select">
                        <optgroup label="День" className="seller__day">
                            {
                                days.map((data, i)=>{ 

                                    return (

                                        <option 
                                            key={i} 
                                            defaultValue={data.value} 
                                            className="seller__date-value">{data.day}</option>
                                        
                                    )
                                })
                            }
                        </optgroup>
                    </select>

                    <select className="date-select">
                        <optgroup label="Месяц" className="seller__month">
                            {
                                months.map((data, i)=>{ 

                                    return (

                                        <option 
                                            key={i} 
                                            defaultValue={data.value} 
                                            className="seller__date-value">{data.month}</option>
                                        
                                    )
                                })
                            }
                        </optgroup>
                    </select>

                    <select className="date-select">
                        <optgroup label="День" className="seller__year">
                        {
                                years.map((data, i)=>{ 

                                    return (

                                        <option 
                                            key={i} 
                                            defaultValue={data.value} 
                                            className="seller__date-value">{data.year}</option>
                                        
                                    )
                                })
                            }
                        </optgroup>  
                    </select>
                </div>
            </div>
)}