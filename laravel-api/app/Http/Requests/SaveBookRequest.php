<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SaveBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => [
                'required',
                'min:4',
                Rule::unique('books')->ignore($this->id)
            ],
            'categoryId'=> 'required',
            'detail'=>['required','min:4'],
            'short_desc'=>['required','min:4'],
            'authorId'=>'required',
            'price'=>'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => "Hãy nhập tên sách",
            'title.min' => "Ít nhất có 4 ký tự",
            'title.unique' => "Tên sách đã tồn tại",
            'categoryId.required' => "Hãy chọn danh mục",
            'detail.required' => "Hãy nhập nội dung",
            'detail.min' => "Ít nhất 4 ký tự",
            'short_desc.required' => "Hãy nhập mô tả",
            'short_desc.min' => "Ít nhất 4 ký tự",
            'authorId.required' => "Hãy nhập tên tác giả",
            'price.required' => "Không được để trống",
        ];
    }
}