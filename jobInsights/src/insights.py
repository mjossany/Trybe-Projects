from src.jobs import read


def get_unique_job_types(path):
    file_content = read(path)
    unique_job_types = list({
        dic["job_type"] for dic in file_content
    })
    return unique_job_types


def filter_by_job_type(jobs, job_type):
    jobs_filtered_list = [
        job for job in jobs if job["job_type"] == job_type]
    return jobs_filtered_list


def get_unique_industries(path):
    file_content = read(path)
    unique_industries_types = list(
        {dic["industry"] for dic in file_content if dic["industry"]}
    )
    return unique_industries_types


def filter_by_industry(jobs, industry):
    industries_filtered_list = [
        job for job in jobs if job["industry"] == industry
    ]
    return industries_filtered_list


def get_max_salary(path):
    file_content = read(path)
    max_salaries_list = list(
        {dic["max_salary"] for dic in file_content if dic["max_salary"]}
    )

    max_salaries_number_list = [
        int(salary) if salary.isdigit() else 0 for salary in max_salaries_list
    ]

    return max(max_salaries_number_list)


def get_min_salary(path):
    file_content = read(path)
    min_salaries_list = list(
        {dic["min_salary"] for dic in file_content if dic["min_salary"]}
    )
    min_salaries_number_list = [
        int(salary) if salary.isdigit() else 0 for salary in min_salaries_list
    ]
    salaries_without_zero = [
        salary for salary in min_salaries_number_list if salary != 0
    ]
    return min(salaries_without_zero)


def v_key(job):
    return ("min_salary" in job) and ("max_salary" in job)


def v_num(job):
    return (type(job["min_salary"]) == int) and (
        type(job["max_salary"]) == int)


def v_val(job):
    return job["max_salary"] > job["min_salary"]


def v_sal(salary):
    return (type(salary) == int)


def matches_salary_range(job, salary):
    if not v_key(job) or not v_num(job) or not v_val(job) or not v_sal(salary):
        raise ValueError
    return job["min_salary"] <= salary <= job["max_salary"]


jobs = [
        {"max_salary": 0, "min_salary": 10},
        {"max_salary": 10, "min_salary": 100},
        {"max_salary": 10000, "min_salary": 200},
        {"max_salary": 15000, "min_salary": 0},
        {"max_salary": 1500, "min_salary": 0},
        {"max_salary": -1, "min_salary": 10},
    ]


def filter_by_salary_range(jobs, salary):
    filtered_salary_list = []
    for job in jobs:
        try:
            if matches_salary_range(job, salary):
                filtered_salary_list.append(job)
        except Exception:
            pass
    return filtered_salary_list
