let company = {
    sales: [{ name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 }
    ],

    development: {
        sites: [{ name: 'Peter', salary: 1000 },
        { name: 'Alex', salary: 1000 }],
        internals: [{ name: 'Jack', salary: 1000 }]
    }
};

// 급여 합계를 구해주는 함수 // 재귀함수로 만들기

function sumSalaries(department) {
    // 탈출 조건이 주어져야하는데 언제 탈출 조건을 줄것인지 필요
    if (Array.isArray(department)) { // 전달된 값이 배열이면
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else { 
        let sum = 0;
        for(let sub of Object.values(department)){
            sum += sumSalaries(sub); // 재귀호출로 각 하위 부서 임직원의 급여 총합 구하기
        }
        return sum;
    }
}

console.log(sumSalaries(company));