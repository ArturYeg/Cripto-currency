import React from "react";
import { API_URL } from '../../core/urls'
import './table.css'
import { createQuery, renderChangePercent } from '../../core/helpers'
import Table from "./table";
import Pagination from "../common/pagination";


class List extends React.Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            isLoading: false,
            error: null,
            page: 1,
            totalPages: 5,
            sorted:{
                sortup:true
            }
            
            
        };
        
    }

    fetchCurrencies() {
        const { page  } = this.state;
        const url = `${API_URL}page=${page}&per_page=20`
        
        console.log(page);
        this.setState({ isLoading: true });

       
        fetch(url)
            .then((responce) => {
                if (responce.status === 200 || responce.ok) {
                    return responce.json();
                }
                throw new Error();
            })
            .then((result) => {
                this.setState({ isLoading: false, currencies: result });
                // console.log(result);
            })
            .catch((err) => {
                this.setState({ isLoading: false, error: err.message });
            });
                

    }

    componentDidMount() {
        this.fetchCurrencies()
    }  

    handleChangePagination = (direction) => {
        const { page } = this.state
        const nextPage = direction === 'next' ? page + 1 : page - 1
        this.setState({ page: nextPage }, this.fetchCurrencies)
    }
    
 sorting = (e) =>{
    let arr = []
    const {currencies} = this.state
    for (let i = 0; i < currencies.length; i++) {
        arr.push(currencies[i].current_price)
        console.log(currencies[i].current_price);
        
    }
    
   
    // this.setState({currencies:arr})

 }   
    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevProps);
    //     console.log(this.state);
    //     if(prevState.page!==this.state.page){
    //         this.fetchCurrencies()
    //     }
    // }
        


     
    
    // sorting = (e) => {                              
    //     let arr = [];
    //     let elements = e.target.parentElement.children

    //     let text = e.target.innerHTML


    //     const key = e.target.id;
    //     for (const item of elements) {
    //        if (item !== elements[0] && item !== e.target) {
    //            item.innerHTML= item.innerHTML.slice(0,item.innerHTML.length-1) + '⇵'
    //            item.style.color = '#9CB3C9'
    //        }
    //     }
    //     if (text.includes('⇵') || text.includes('↑')) {
    //         arr = this.state.currencies.sort(function (a, b) {
    //         return b[key] - a[key];
    //       });
    //       e.target.innerHTML = 'Price ↓'
    //       e.target.style.color = ' #3CD483'
    //     }else{
    //          arr = this.state.currencies.sort(function (a, b) {
    //         return a[key] - b[key];
    //       });
    //       e.target.innerHTML = 'Price ↑'
    //       e.target.style.color = ' #D64D96'
    //     }
    //     this.setState({currencies:arr})
    //   };
    
    render() {
        const { currencies, error, isLoading, page, totalPages} = this.state;
       
        if (error) {
            return <div>{error}</div>;
        }
        if (isLoading) {
            return <div>Loading......</div>;
        }
        
        

        return (
            <>
                <Table currencies={currencies} sorting={this.sorting}/>
                <Pagination page={page}
                    totalPages={totalPages}
                    handleChangePagination={this.handleChangePagination}
                    pageChange={this.pageChange}
                    />
            </>
        );
    }
}
export default List;