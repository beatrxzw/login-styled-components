// import { useAuth } from './useAuth';
// import { api } from '../services/api';
// import { useEffect } from 'react';

// export const useRefreshToken = () => {
//     const { setAuth } = useAuth();

//     const refresh = async () => {


//         try {
//             const novoRefreshToken = localStorage.getItem('refreshToken');

//             if (!novoRefreshToken) {
//                 throw new Error('Refresh Token não está disponível')
//             }

//         const response = await api.post('/adm/refresh-token', {
//             token: novoRefreshToken
//         });

//         console.log('Resposta da API:', response.data);

//         //extraindo token
//         //***falta extrair **/

//         // const { accessToken, refreshToken } = response.data;
//         const accessToken = response?.data?.accessToken;
//         const refreshToken = response?.data?.refreshToken;

//         setAuth((prev) => ({
//             ...prev,
//             accessToken,
//             refreshToken,
//         }));

//         //atualiza o localStorage
//         localStorage.setItem('Access Token:', accessToken);
//         localStorage.setItem('Refresh Token:', refreshToken);

//         return accessToken; 
//         } catch (error) {

//         }

//     }
//     return refresh;
// };


// import { useAuth } from './useAuth';
// import { api } from '../services/api';

// export const useRefreshToken = () => {
//     const { setAuth } = useAuth();

//     const refresh = async () => {

//         try {
//             const novoRefreshToken = localStorage.getItem('refreshToken');

//             if (!novoRefreshToken) {
//                 throw new Error('Refresh Token não está disponível')
//             }

//         const response = await api.post('/auth/refresh', {
//             refreshToken: novoRefreshToken
//         });

//         console.log('Resposta da API:', response.data);

//         const accessToken = response?.data?.accessToken;
//         const refreshToken = response?.data?.refreshToken;

//         setAuth((prev) => ({
//             ...prev,
//             accessToken,
//             refreshToken,
//         }));

//         //atualiza o localStorage
//         localStorage.setItem('Access Token:', accessToken);
//         localStorage.setItem('Refresh Token:', refreshToken);

//         return accessToken; 
//         } catch (error) {

//         }

//     }
//     return refresh;
// };


import { useAuth } from './useAuth';
import { api } from '../services/api';

export const useRefreshToken = () => {
    const { setAuth} = useAuth();

    const refresh = async () => {

        const response = await api.post('/auth/refresh', {}, {
            withCredentials: true,
        }
        );

        console.log('Resposta da API:', response.data);

        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);

            return {...prev, accessToken: response.data.accessToken}
        })


        return response.data.accessToken; 

    }
    return refresh;
};


