<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Campaign;
use App\Http\Controllers\Controller;
use Validator, Storage;

class CampaignController extends Controller
{

    /**
     * Display a listing of the resource.
     * @return json response
     */
    public function index()
    {
        return response()->json(Campaign::orderBy('name')->get());
    }

    /**
     * Return Campaign in json format
     * @param integer $id
     * @return json
     */
    public function view($id)
    {
        $campaign = Campaign::find($id);

        if ($campaign) {
            $response = [
                "success" => true,
                "data" => $campaign->toArray(),
            ];
        } else {
            $response = [
                "success" => false,
                "message" => "There is no such campaign.",
            ];
        }

        return response()->json($response);
    }
    /**
     * Store Campaign
     * @param Request $request
     * @return json return result
     */
    public function store(Request $request)
    {
        $param = $request->all();

        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                'message' => $validator->errors()
            ], 401);
        }

        $campaignData = null;
        $updateFlag = false;
        if (isset($param['id'])) {
            $campaignData = Campaign::find($param['id']);
            if (!$campaignData) {
                $campaignData = new Campaign;
            } else {
                $updateFlag = true;
            }
        } else {
            $campaignData = new Campaign;
        }

        //Update data
        $response = [];
        $campaignData->fill($param);
        if ($campaignData->save()) {
            if ($updateFlag) {
                $response = [
                    "success" => true,
                    "message" => "You've updated a campaign successfully.",
                ];
            } else {
                $response = [
                    "success" => true,
                    "message" => "You've add a campaign successfully.",

                ];
            }
        } else {
            $response = [
                "success" => false,
                "message" => "Something went wrong",
            ];
        }

        return response()->json($response);
    }

    /**
     * Upload Campaign Files
     * @param Request $request
     * @return json return result
     */
    public function upload(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file' => 'required',
            'file.*' => 'required|mimes:jpeg,png,gif,jpg',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                'message' => $validator->errors()
            ], 401);
        }

        $fileNameList = [];
        if ($request->hasfile('file')) {
            foreach ($request->file('file') as $file) {
                $file = $file->store('public/campaign');
                $fileNameList[] = Storage::url($file);
            }

            return response()->json([
                "success" => true,
                "message" => "File successfully uploaded",
                "files" => $fileNameList
            ]);
        }
    }
}
